// VAT_RATE.js

window.VAT_RATE = {
  "tables": {
    "VAT_RATE": {
      "columns": {
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "Gid for the country. "
        },
        "VAT_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "VAT_CODE",
          "info": "Value added tax code. "
        },
        "VAT_RATE_SEQ_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "RATE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Tax rate. "
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Effective date of tax rate. "
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Expiry date for tax rate."
        },
        "PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": true
        },
        "OVERRIDE_VAT_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VAT_CODE"
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
      "fk_tables": []
    }
  }
};
