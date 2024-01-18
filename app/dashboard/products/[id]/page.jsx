import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noproduct.jpg" alt="product picture" fill />
                </div>
                NB1 Lissant Ultime
             </div>
        <div className={styles.formContainer}>
            <form action="" className={styles.form}>

            <label>Title</label>
            <input type="text" placeholder="NB1 Lissant Ultime" name="title" />
            <label>Price</label>
            <input type="number" placeholder="$39.90" name="price" />
            <label>Stock</label>
            <input type="number" placeholder="354" name="stock" />
            <label>Color</label>
            <input type="text" placeholder="red" name="color" />
            <label>Size</label>
            <input type="text" placeholder="XL" name="size" />
            <label>Cat</label>
            <select name="cat" id="cat">
              <option value="general">Choose a Category</option>
              <option value="hair">Hair</option>
              <option value="skin">Skin</option>
              <option value="nails">Nails</option>
              <option value="makeup">Makeup</option>
            </select>
            
            <label>Description</label>
            <textarea
              name="desc"
              id="desc"
              rows="16"
              placeholder="Description"
            ></textarea>
            <button type="submit">Update</button>
            </form>
        </div>
        
    </div>
  )
}

export default SingleProductPage
