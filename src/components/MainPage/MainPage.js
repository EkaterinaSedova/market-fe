import React from 'react';
import Header from '../Header/Header'
import styles from './Main.module.css'
import {useDispatch, useSelector} from "react-redux"
import { getProducts } from '../../store/ItemSlice/itemSlice'
import Left from '../../img/Left.svg'
import Right from '../../img/North.svg'

const MainPage = () => {

    const dispatch = useDispatch();
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getProducts({page}))
    }, [page, dispatch])

    const handleNextClick = () => {
        setPage(page+1);
        dispatch(getProducts({page}))
    }

    const handlePrevClick = () => {
        setPage(page-1);
        dispatch(getProducts({page}))
    }

    const isAvailable = () => {
        if(products.length < 10) return false;
        return true;
    }

    const { products } = useSelector(({items}) => items);

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <h2>Categories</h2>
                    <ul>
                        {categories.map((category, index) => (
                            <li key={index}>{category.name}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.main}>
                    <h2>Products</h2>
                    <div className={styles.productList}>
                        {products.map((product, index) => (
                            <div className={styles.product} key={index}>
                                <NavLink to={HOTEL_ROUTE + `/${hotel.id}`} className={styles.productName}>{hotel.name}</NavLink>
                                <p>{product.description}</p>
                                <p className={styles.price}>{product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.pageButtons}>
                {page>1 ?
                    <button onClick={() => handlePrevClick()}><img src={Left} alt="prev"/></button>
                    :
                    <span><img src={Left} alt="prev"/></span>
                }
                {isAvailable() ?
                    <button onClick={() => handleNextClick()}><img src={Right} alt="prev"/></button>
                    :
                    <span><img src={Right} alt="prev"/></span>}
            </div>
        </>
    );
};

export default MainPage;