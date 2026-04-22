// OB_REMARK.js

window.OB_REMARK = {
  "tables": {
    "OB_REMARK": {
      "description": "Free form entry text for the order base. This is a space provided for the customer/user to enter any additional remarks for the base order. For e.g., a remark may say that the 'Driver may not wear a beard while delivering this order due to hazardous chemicals'",
      "columns": {
        "ORDER_BASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OB_ORDER_BASE",
          "info": "The GID for the order base."
},
        "REMARK_SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The sequence (key) for the remark."
},
        "REMARK_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REMARK_QUAL",
          "info": "A pointer to the remark type. For example: external order number or purchase number."
},
        "REMARK_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": false,
          "info": "A user-entered remark."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
}
      },
      "fk_tables": []
    }
  }
};