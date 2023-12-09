// import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */
const defaultUser = {
    _id: "82c07e0f-e309-4e37-b84b-ea584ae5a7fe",
    email: "testUser@123.com",
    password: "221068207e125b97beb4e2d062e888b1", //userPassword
    firstName: "Test",
    lastName: "User",
    addressCount: 6,
    addressList: [
        {
            "addressIndex": 1,
            "address": {
                "addressName": "Lorem Ipsum",
                "address1": "Lorem Ipsum is simply dummy text",
                "address2": "Lorem Ipsum has been the industry's standard since the 1500s",
                "address3": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
                "addressType": "Home",
                "addressTel": "1234567890"
            }
        },
        {
            "addressIndex": 2,
            "address": {
                "addressName": "Et itaque officiis",
                "address1": "A quia expedita aut sint modi ea voluptatum porro.",
                "address2": "Ut atque quis qui accusamus minus in nemo eveniet ut temporibus veniam",
                "address3": "Nam quas enim ut dignissimos nobis in illo harum!",
                "addressType": "Other",
                "addressTel": "0192837645"
            }
        },
        {
            "addressIndex": 3,
            "address": {
                "addressName": "Lorem Ipsum",
                "address1": "Lorem Ipsum is simply dummy text",
                "address2": "Lorem Ipsum has been the industry's standard since the 1500s",
                "address3": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
                "addressType": "Home",
                "addressTel": "1234567890"
            }
        },
        {
            "addressIndex": 4,
            "address": {
                "addressName": "Et itaque officiis",
                "address1": "A quia expedita aut sint modi ea voluptatum porro.",
                "address2": "Ut atque quis qui accusamus minus in nemo eveniet ut temporibus veniam",
                "address3": "Nam quas enim ut dignissimos nobis in illo harum!",
                "addressType": "Other",
                "addressTel": "0192837645"
            }
        },
        {
            "addressIndex": 5,
            "address": {
                "addressName": "Lorem Ipsum",
                "address1": "Lorem Ipsum is simply dummy text",
                "address2": "Lorem Ipsum has been the industry's standard since the 1500s",
                "address3": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
                "addressType": "Home",
                "addressTel": "1234567890"
            }
        },
        {
            "addressIndex": 6,
            "address": {
                "addressName": "Et itaque officiis",
                "address1": "A quia expedita aut sint modi ea voluptatum porro.",
                "address2": "Ut atque quis qui accusamus minus in nemo eveniet ut temporibus veniam",
                "address3": "Nam quas enim ut dignissimos nobis in illo harum!",
                "addressType": "Other",
                "addressTel": "0192837645"
            }
        }
    ],
    cart: [],
    wishlist: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    };
    
export const users = [
  
  {
    _id: "82c07e0f-e309-4e37-b84b-ea584ae5a7fe",
    email: "testUser@123.com",
    password: "221068207e125b97beb4e2d062e888b1", //userPassword
    firstName: "Test",
    lastName: "User",
    addressCount: 6,
    addressList: [
        {
            "addressIndex": 1,
            "address": {
                "addressName": "Lorem Ipsum",
                "address1": "Lorem Ipsum is simply dummy text",
                "address2": "Lorem Ipsum has been the industry's standard since the 1500s",
                "address3": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
                "addressType": "Home",
                "addressTel": "1234567890"
            }
        },
        {
            "addressIndex": 2,
            "address": {
                "addressName": "Et itaque officiis",
                "address1": "A quia expedita aut sint modi ea voluptatum porro.",
                "address2": "Ut atque quis qui accusamus minus in nemo eveniet ut temporibus veniam",
                "address3": "Nam quas enim ut dignissimos nobis in illo harum!",
                "addressType": "Other",
                "addressTel": "0192837645"
            }
        },
        {
            "addressIndex": 3,
            "address": {
                "addressName": "Lorem Ipsum",
                "address1": "Lorem Ipsum is simply dummy text",
                "address2": "Lorem Ipsum has been the industry's standard since the 1500s",
                "address3": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
                "addressType": "Home",
                "addressTel": "1234567890"
            }
        },
        {
            "addressIndex": 4,
            "address": {
                "addressName": "Et itaque officiis",
                "address1": "A quia expedita aut sint modi ea voluptatum porro.",
                "address2": "Ut atque quis qui accusamus minus in nemo eveniet ut temporibus veniam",
                "address3": "Nam quas enim ut dignissimos nobis in illo harum!",
                "addressType": "Other",
                "addressTel": "0192837645"
            }
        },
        {
            "addressIndex": 5,
            "address": {
                "addressName": "Lorem Ipsum",
                "address1": "Lorem Ipsum is simply dummy text",
                "address2": "Lorem Ipsum has been the industry's standard since the 1500s",
                "address3": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
                "addressType": "Home",
                "addressTel": "1234567890"
            }
        },
        {
            "addressIndex": 6,
            "address": {
                "addressName": "Et itaque officiis",
                "address1": "A quia expedita aut sint modi ea voluptatum porro.",
                "address2": "Ut atque quis qui accusamus minus in nemo eveniet ut temporibus veniam",
                "address3": "Nam quas enim ut dignissimos nobis in illo harum!",
                "addressType": "Other",
                "addressTel": "0192837645"
            }
        }
    ],
    cart: [],
    wishlist: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    }
];

