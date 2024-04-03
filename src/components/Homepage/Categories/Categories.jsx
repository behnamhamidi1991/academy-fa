import React from "react";
import "./categories.css";
import { categoryIcons } from "../../../data";

const Categories = () => {
  return (
    <div className="categories">
      {categoryIcons.map((item) => (
        <div key={item.id} className="categoryBox">
          <img src={item.image} alt="" />
          <h4>{item.title}</h4>
          <p className="categoryBoxDesc">{item.description}</p>
          <p className="categoryBoxContent">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده.
          </p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
