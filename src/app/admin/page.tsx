import { redirect } from 'next/navigation'

const Page = () => {
    redirect('/login')

    return (
        <div>
            <p></p>
        </div>
    )
}

export default Page
