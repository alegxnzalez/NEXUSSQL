// GTM_ITEM_UOM_CONVERSION.js

window.GTM_ITEM_UOM_CONVERSION = {
  "tables": {
    "GTM_ITEM_UOM_CONVERSION": {
      "columns": {
        "GUIC_SEQ_NUM": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Internal sequence number for the item unit of measure conversion records."
},
        "GTM_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ITEM",
          "info": "The GID for the item that is having the item unit of measure information added, updated or removed. The item UOM conversion allows you to record multiple conversion rates and an item's unit of measurement."
},
        "FROM_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "The from unit of measure for this entry. For example if you wish to convert from pounds (LB) to kilograms (KG) the from unit of measure would be pounds."
},
        "TO_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "The to unit of measure for this entry. For example if you wish to convert from pounds (LB) to kilograms (KG) the to unit of measure would be kilograms."
},
        "CONVERSION_RATE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The conversion rate between the from and to unit of measure for this entry. For example if you wish to convert from pounds (LB) to kilograms (KG) the conversion rate would be - for the standard LB to KG conversion - 0.453592."
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