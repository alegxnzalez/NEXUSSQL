// ITEM_EXPORT_LICENSE.js

window.ITEM_EXPORT_LICENSE = {
  "tables": {
    "ITEM_EXPORT_LICENSE": {
      "columns": {
        "ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ITEM"
},
        "SEQUENCE_NO": {
          "type": "NUMBER(8)",
          "nullable": false,
          "key_value": true
},
        "LICENSE_NUMBER": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "LICENSE_ID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "LICENSE_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "LICENSE_EXCEPTION_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "LICENSE_SYMBOL": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "LICENSE_STATUS_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "ISSUE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true
},
        "DDTC_REGISTRATION_NUMBER": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "DDTC_MILITARY_EQUIP_INDICATOR": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "DDTC_ELIGIBLE_CERT_NUMBER": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "DDTC_QUANTITY": {
          "type": "NUMBER",
          "nullable": true
},
        "DDTC_QUANTITY_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "DDTC_QUANTITY_UOM_TYPE": {
          "type": "VARCHAR2(101)",
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