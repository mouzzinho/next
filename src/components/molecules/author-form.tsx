import { Form, Formik } from 'formik'
import { useContext } from 'react'
import { redirect } from 'next/navigation'

import styles from './author-form.module.scss'

import { AuthorContext } from '@/contexts/author-context'

import Input from '@/components/atoms/input'
import Button from '@/components/atoms/button'

const AuthorForm = () => {
    const author = useContext(AuthorContext)

    const handleSubmit = (values: { id: number | null; name: string }) => {
        alert(`id: ${values.id}, name: ${values.name}`)
        setTimeout(() => {
            redirect('/authors')
        }, 500)
    }

    return (
        <Formik
            initialValues={{ id: author.authorId, name: author.displayName }}
            onSubmit={handleSubmit}
        >
            {() => {
                return (
                    <Form className={styles.form}>
                        <p className={styles.title}>Zmień nazwę autora</p>
                        <Input name={'id'} isDisabled={true} label={'ID'} />
                        <Input name={'name'} label={'Nazwa'} />
                        <Button type={'submit'}>Submit</Button>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default AuthorForm
