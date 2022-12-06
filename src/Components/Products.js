import { useEffect, useState } from "react";
import '../App.css';
import Dropdown from "./Dropdown";
import Sort from "./Sort";

const Products = (props) => {
    const [list, setList] = useState([]);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [sort, setSort] = useState('');

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products${category}${sort}`)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setList(res);
            });
        // console.log(data);
        // setData(data);
    }, [category, sort]);

    return (
        <>
            <div className="drop">
                <Dropdown category={category} setCategory={setCategory} />
                <Sort sort={sort} setSort={setSort} />
            </div>
            <div className="product-list">
                <h1>Global Search</h1>
                <input
                    type='text'
                    placeholder="Search..."
                    onChange={(e) => setSearch(e.target.value)}
                />
                {list &&
                    list.filter((value) => {
                        if (search === '') {
                            return value
                        } else if (value.title.toLowerCase().includes(search.toLowerCase())) {
                            return value
                        } else if (value.category.includes({ category })) {
                            return value
                        }
                    })
                        .map((item) => {
                            return (
                                <div key={item.id} className="product-list">
                                    <img className="img" src={item.image} alt={item.title} />
                                    <h3>{item.title}</h3>
                                    <p>{item.category}</p>
                                    <span>{item.price} ${" "}</span>
                                    <p>{`${item.description}`}</p>
                                </div>
                            );
                        })}
            </div>
        </>
    );
}

export default Products;