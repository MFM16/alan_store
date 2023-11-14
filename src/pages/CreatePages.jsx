import { useState } from "react"
import Header from "../Fragments/Header"
import Navbar from "../Fragments/Navbar"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const CreatePages = () => {
    const [photo, setPhoto] = useState('')
    const navigate = useNavigate()

    const handleFileChange = (e) => {
        setPhoto(e.target.files[0])
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const data = new FormData()

        data.append('product_name', e.target.name.value)
        data.append('product_photo', photo)
        data.append('product_price', e.target.price.value)

        axios.post('http://alan_resto_be.test/api/product', data)
            .then((response) => {
                navigate('/products')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='w-full min-h-screen bg-gray-100'>
            <Header></Header>
            <Navbar></Navbar>

            <div className="px-8 py-2 w-full">
                <div className="mt-3 px-6 py-5 bg-white w-full">
                    <p className="text-primary text-xl font-semibold">Tambahkan Menu</p>
                    <form className="mt-5" onSubmit={submitHandler}>
                        <div className="w-full flex flex-col gap-1">
                            <label htmlFor="name">Nama Menu</label>
                            <input type="text" name="name" className="rounded-none rounded-e-lg focus:outline-none px-2 py-1 border-2 border-gray-300" />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="name" className="mt-3">Foto Menu</label>
                            <div class="flex items-center justify-center w-full mt-1">
                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-solid rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200">
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">drag and drop file her or click</p>
                                    </div>
                                    <input id="dropzone-file" type="file" name="photo" class="hidden" onChange={handleFileChange} />
                                </label>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1 mt-1">
                            <label htmlFor="price" className="mt-5">Harga</label>
                            <div className="w-full flex">
                                <span class="inline-flex items-center px-3 text-sm text-white bg-primary border rounded-e-0 border-gray-300 rounded-s-md">
                                    RP
                                </span>
                                <input type="number" name="price" class="rounded-none rounded-e-lg border-2 focus:outline-none block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" />
                            </div>
                        </div>
                        <div className="flex justify-end mt-5" >
                            <button type="submit" className="bg-success px-8 py-1 text-white rounded-sm">
                                Simpan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreatePages