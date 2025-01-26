import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";
import { ProductService } from "./ProductService";

export default function TextSlider() {
	const [products, setProducts] = useState([]);
	const responsiveOptions = [
		{
			breakpoint: "1400px",
			numVisible: 1,
			numScroll: 1,
		},
		{
			breakpoint: "1199px",
			numVisible: 1,
			numScroll: 1,
		},
		{
			breakpoint: "767px",
			numVisible: 1,
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
		productService
			.getProductsSmall()
			.then((data) => setProducts(data.slice(0, 9)));
	}, []);

	const productTemplate = (product) => {
		return (
			<div className="flex mt-2 justify-center items-center">
				<div>
					<div className="border-1  surface-border border-round">
						<div className="mb-3"></div>
						<div className="px-3">
							<div>
								<h4 className="mb-1 font-bold">{product.name}</h4>
								<h6 className="mt-0 mb-2 text-sm">{product.text}</h6>
							</div>
							<Tag value={product.name} className="text-sm" severity={getSeverity(product)}></Tag>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="card flex justify-center items-center">
			<Carousel
				className="md:w-[70%] w-[90%]"
				value={products}
				numVisible={1}
				numScroll={3}
				responsiveOptions={responsiveOptions}
				itemTemplate={productTemplate}
			/>
		</div>
	);
}
