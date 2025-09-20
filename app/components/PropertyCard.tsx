import React from 'react';
import styles from './Propertycard.module.css'
import Image from "next/image";

// components/PropertyCard.tsx




export default function PropertyCard() {
return (
<>
  <h1>Location in Dhala</h1>
  <button className='prev'>me</button>
  <button className='next'>click me</button>

  <div className={styles.cardcontainer1}>
      <div className={styles.productcard}>
        <Image
          src="9c151bc6-7e66-49bb-b62d-facc9830d556 (1).avif" 
          alt="Product"
          className={styles.productimage}
        />
        <div className={styles.productcard}>
          <h3 className="product-title">hello</h3>
          <p className="product-price">49$</p>
        </div>
  </div>

    <div className={styles.productcard}>
        <Image
          src="9d0b603c-e771-4fe5-a63e-52e5e2626c73 (1).avif"
          alt="Product"
          className={styles.productimage}
          />

        <div className="product-info">
          <h3 className="product-title">Smart Watch</h3>
          <p className="product-price">$129.99</p>
        </div>
    </div>

    <div className={styles.productcard}>
        <Image
          src="76107987-a1d0-4310-a7d0-86d47297cdd3 (1).avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
        </div>
    </div>

    <div className={styles.productcard}>
        <Image
          src="c0cede5f-9f2f-4128-b6e5-111e9817ee57.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
    <div className={styles.productcard}>
        <Image
          src="./dhaka/cc37897f-39f3-4e76-8f11-d834df0e7430.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
    <div className={styles.productcard}>
        <Image
          src="dhaka\d39851f7-2bc8-48f8-9382-29fe65c86758.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className={styles.productcard}>
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
     
    <div className={styles.productcard}>
        <Image
          src="../dhaka/d39851f7-2bc8-48f8-9382-29fe65c86758.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className={styles.productcard}>
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
    
    <div className={styles.productcard}>
        <Image
          src="./dhaka\d39851f7-2bc8-48f8-9382-29fe65c86758.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className={styles.productcard}>
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
    </div>
    <h1>Hotel of Kualalampur</h1>

   <div className={styles.cardcontainer2}>
    <div className={styles.productcard}>
        <Image
          src="../Kualalampur/05f59b8a-c9e2-4dc3-99aa-684fba6a71e0.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className={styles.productcard}>
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>

        <div className={styles.productinfo}>
          <h3 className='styles.product-title'>Travel Backpack</h3>
          <p className='product-price'>$49.99</p>
      </div>
    </div>
    <div className={styles.productcard}>
        <Image
          src="../Kualalampur/20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>

    </div>
    <div className={styles.productcard}>
        <Image
          src="33a4e913-cb34-43ca-9ffa-1da26174d1ef.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className={styles.productcard}>
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
    <div className={styles.productcard}>
        <Image
          src="../kualampur/bba5c634-b6eb-40d5-8400-8b66cd681bae.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className={styles.productcard}>
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
    <div className={styles.productcard}>
        <Image
          src="../bba5c634-b6eb-40d5-8400-8b66cd681bae.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className={styles.productcard}>
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
        </div>
    </div>
        <div className={styles.productcard}>
        <Image
          src="..\Kualalampur\20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className='productinfo'>
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
        <div className={styles.productcard}>
        <Image
          src="..\Kualalampur\7d564a6c-35fd-4137-b226-74f6f924eb78.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
 
    <h1>this is the cardcontainer3</h1>
    <div>
       <div className={styles.productcard}>
       
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
  
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
    
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
        </div>
    </div>
        <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
        <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
    </div>
    <h1>this is the cardcontainer4</h1>
    <div className={styles.cardcontainer4}>
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
  
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
 
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
        </div>
    </div>
        <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
        <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
    </div>
    <h1>this is the cardcontainer5</h1>
    <div className={styles.cardcontainer5}>
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
  
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
  
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
        </div>
    </div>
        <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
        <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
        <div className={styles.cardcontainer5}>
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
  
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
  
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
        </div>
    </div>
        <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
        <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
      </div>
    </div>
        <div className={styles.cardcontainer5}>
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
  
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
  
    <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
        </div>
    </div>
        <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
        <div className={styles.productcard}>
        <Image
          src="20cec5d4-0b3f-410f-81a9-76c2a80d0557.avif"
          alt="Product"
          className={styles.productimage}
        />
        <div className="product-info">
          <h3 className="product-title">Travel Backpack</h3>
          <p className="product-price">$49.99</p>
      </div>
    </div>
  </div>
  </div>
</>
)
}