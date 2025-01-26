import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";
import { ProductService } from "./ProductService"; 

export default function BlogsSlider() {
	const [products, setProducts] = useState([]);
	const responsiveOptions = [
		{
			breakpoint: "1400px",
			numVisible: 3,
			numScroll: 1,
		},
		{
			breakpoint: "1199px",
			numVisible: 3,
			numScroll: 1,
		},
		{
			breakpoint: "767px",
			numVisible: 2,
			numScroll: 1,
		},
		{
			breakpoint: "575px",
			numVisible: 1,
			numScroll: 1,
		},
	];

	const getSeverity = (product) => {
		switch (product.inventoryStatus) {
			case "INSTOCK":
				return "success";
			case "LOWSTOCK":
				return "warning";
			case "OUTOFSTOCK":
				return "danger";
			default:
				return null;
		}
	};

	useEffect(() => {
	
		const productService = new ProductService();


		productService.getProductsSmall().then((data) => {
			setProducts(data.slice(0, 9));
		});
	}, []);

	const productTemplate = (product) => {
		return (
			<div className="flex mt-1 justify-center items-center">
				<div className="md:w-[90%] rounded-3xl bg-yellow-600 surface-border border-round m-2 text-center py-3 px-2">
					<div className="mb-3">
						<img
							src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
							alt={product.name}
							className="md:w-full h-[40vh] rounded-3xl shadow-2"
						/>
					</div>
					<div className="text-left">
						<h4 className="mb-1 text-white">{product.name}</h4>
						<h6 className="mt-0 mb-3 text-white">${product.price}</h6>
						<Tag
							value={product.inventoryStatus}
							severity={getSeverity(product)}></Tag>
						<div className="mt-5 flex-wrap gap-2 justify-content-center">
							<Button
								icon="pi pi-search"
								className="p-button p-button-rounded"
							/>
							<Button
								icon="pi pi-star-fill"
								className="p-button-success p-button-rounded"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="card flex justify-center items-center">
			<Carousel
				value={products}
				numVisible={3}
				numScroll={3}
				responsiveOptions={responsiveOptions}
				className="custom-carousel md:w-[70%] w-[35%] text-yellow-600 h-full lg:w-[90%]"
				circular
				autoplayInterval={3000}
				itemTemplate={productTemplate}
			/>
		</div>
	);
}
