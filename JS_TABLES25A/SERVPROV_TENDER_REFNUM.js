// SERVPROV_TENDER_REFNUM.js

window.SERVPROV_TENDER_REFNUM = {
  "tables": {
    "SERVPROV_TENDER_REFNUM": {
      "columns": {
        "I_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TENDER_COLLAB_SERVPROV"
        },
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TENDER_COLLAB_SERVPROV",
          "info": "identify the servprov who entered the refnum"
        },
        "TENDER_SHIPMENT_REFNUM_QUAL": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_REFNUM_QUAL"
        },
        "TENDER_SHIPMENT_REFNUM": {
          "type": "VARCHAR2(240)",
          "nullable": false
        },
        "TENDER_SHIPMENT_REFNUM_QUAL_D": {
          "type": "VARCHAR2(256)",
          "nullable": false
        },
        "RESPONSE_I_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": true
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
