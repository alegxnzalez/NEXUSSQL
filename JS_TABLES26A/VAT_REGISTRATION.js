// VAT_REGISTRATION.js

window.VAT_REGISTRATION = {
  "tables": {
    "VAT_REGISTRATION": {
      "columns": {
        "VAT_REG_NO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "VAT_REG_NO_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "COUNTRY_CODE"
},
        "CUST_VAT_REG_COUNTRY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE"
},
        "DEFAULT_INTRA_EU_VAT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VAT_CODE"
},
        "IS_PRIMARY_REGISTRATION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates if this VAT registration is a primary registration.  This is used by the VAT calculation logic to decide whether the default VAT code or Foreign VAT Code Override should be used"
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
        "CORPORATION_VAT_REG_JOIN",
        "INVOICE"
]
    }
  }
};