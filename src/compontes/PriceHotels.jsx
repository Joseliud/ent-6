import { useForm } from "react-hook-form"

const PriceHotels = ({setfromTo}) => {

    const { handleSubmit, register, reset } = useForm()

    const submit = data => {
        const from = data.from
        const to = data.from

        setfromTo({
            from: from === '' ? 0 : +from, 
            to: to === '' ? Infinity : Number(to)
        })
    }

  return (
    <section>
    <h3>Price</h3>
    <form onSubmit={handleSubmit(submit)}> 
      <label>
        <span>From</span>
        <input {...register('form')} type="number" />
      </label>
      <label>
        <span>To</span>
        <input {...register('to')} type="number" />
      </label>
      <button>Apply</button>
    </form>
  </section>
  )
}

export default PriceHotels