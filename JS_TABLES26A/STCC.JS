// STCC.js

window.STCC = {
  "tables": {
    "STCC": {
      "description": "This table defines the STCC governmental code and name for the item.",
      "columns": {
        "STCC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "STCC_GID contains the unique identifier for the Standard Commodity Code (STCC) for the item being shipped."
},
        "STCC_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "STCC_XID contains the unique external identifier for the Standard Commodity Code (STCC) for the item being shipped."
},
        "STCC_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "STCC_NAME contains the Standard Commodity Code (STCC) name of the item being shipped."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "IS_49_CODE": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Y/N, THE STCC CODE IS A 49 CODE AND APPLIES TO A HAZARDOUS MATERIAL ."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
}
      },
      "fk_tables": [
        "DM_TRANSACTION",
        "FLEX_COMMODITY_PROFILE_D",
        "HAZMAT_ITEM",
        "ITEM",
        "QUOTE_SHIP_UNIT"
]
    }
  }
};