// GTM_ITEM_COUNTRY_OF_ORIGIN.js

window.GTM_ITEM_COUNTRY_OF_ORIGIN = {
  "tables": {
    "GTM_ITEM_COUNTRY_OF_ORIGIN": {
      "columns": {
        "ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ITEM",
          "info": "The GID for the item that is having the country of origin information added, updated, or removed."
},
        "SUPPLIER_SITE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTACT",
          "info": "The GID for the supplier's party identification for where this item is sourced for this supplier."
},
        "COUNTRY_OF_ORIGIN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "Country code of the country of origin related to this supplier's source for this item. May be the two or three digit ISO country code depending on which option has been selected."
},
        "MANUFACTURING_COUNTRY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "Country code for the country of manufacturing related to this supplier's manufacturing of this item. May be the two or three digit ISO country code depending on which option has been selected."
},
        "IS_DEFAULT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Check box indicating - in the case of multiple country of origin entries for a supplier - which record is the default/assumed country of origin."
},
        "MANUFACTURING_PART_NO": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "Supplier's part number for this item."
},
        "MANUFACTURING_DESC": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Supplier's description for this item."
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