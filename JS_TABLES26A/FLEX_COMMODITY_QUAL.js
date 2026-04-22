// FLEX_COMMODITY_QUAL.js

window.FLEX_COMMODITY_QUAL = {
  "tables": {
    "FLEX_COMMODITY_QUAL": {
      "description": "This table identifies the enumerated values for qualifying the commodities. This is just a way to separate the qualifiers. The information can be directly stored in the Flex_commodity_Profile_D table.",
      "columns": {
        "FLEX_COMMODITY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "FLEX_COMMODITY_QUAL_GID contains the unique identifier for the flex commodity qualifier."
},
        "FLEX_COMMODITY_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "FLEX_COMMODITY_QUAL_XID contains the unique external identifier for the flex commodity."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
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
        "CONSOL",
        "FLEX_COMMODITY_PROFILE",
        "INVOICE_LINEITEM",
        "OB_SHIP_UNIT",
        "SHIP_UNIT",
        "S_SHIP_UNIT"
]
    }
  }
};