import Image from "next/image"
import Link from "next/link"
import styles from "@/app/ui/dashboard/products/products.module.css"
import Search from "@/app/ui/dashboard/search/search"
import Pagination from "@/app/ui/dashboard/pagination/pagination"

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..."/>
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add product</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Created at</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
              <Image 
                src="/noproduct.jpg" 
                alt="product picture"
                width={40}
                height={40} 
                className={styles.productImage}
              />
                NB1 Lissant Ultime
              </div>  
            </td>
            <td>NB1 Lissant Ultime est un traitement capillaire...</td>
            <td>$39.90</td>
            <td>13.01.2024</td>
            <td>647</td>
            
            <td>
              <div className={styles.buttons}>
              <Link href="/dashboard/products/edit">
                <button className={`${styles.button} ${styles.view}`}>
                  View
                </button>
              </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
            </tr>
        </tbody>


      </table>
        <Pagination />
    </div>
  )
}

export default ProductsPage
