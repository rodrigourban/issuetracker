'use client'
import "easymde/dist/easymde.min.css";
import { useState } from 'react';
import { Button, Text, TextFieldInput, TextFieldRoot } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from '@/app/validationSchemas';
import { z } from 'zod';
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const router = useRouter();
  const [ isSubmitting, setIsSubmitting ] = useState(false);
  const { register, control, handleSubmit, formState: {errors} } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema)
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
      await axios.post('/api/issues/', data);
      router.push('/issues');
      } catch (error) {
        console.error(error);
        setIsSubmitting(false);
      }
  })
  
  return (
    <form className='max-w-xl space-y-3' onSubmit={onSubmit}>
      <TextFieldRoot >
        <TextFieldInput placeholder='Issue title' {...register('title')} />
      </TextFieldRoot>
      <ErrorMessage>{errors.title?.message}</ErrorMessage>
      <Controller
        name='description'
        control={control}
        render={({ field }) => <SimpleMDE placeholder='Issue description' {...field} />}
      />
      <ErrorMessage>{errors.description?.message}</ErrorMessage>
      <Button disabled={isSubmitting}>Submit new issue {isSubmitting && <Spinner />}</Button>
    </form>
  )
}

export default NewIssuePage