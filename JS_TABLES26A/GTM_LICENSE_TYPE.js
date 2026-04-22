// GTM_LICENSE_TYPE.js

window.GTM_LICENSE_TYPE = {
  "tables": {
    "GTM_LICENSE_TYPE": {
      "columns": {
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
},
        "LICENSE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "LICENSE_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "LICENSE_CATEGORY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_LICENSE_CATEGORY"
},
        "LICENSE_TYPE_NAME": {
          "type": "VARCHAR2(225)",
          "nullable": true
},
        "LICENSE_TYPE_DESCRIPTION": {
          "type": "VARCHAR2(225)",
          "nullable": true
},
        "TOLERANCE_VALUE_ABOVE": {
          "type": "NUMBER",
          "nullable": true
},
        "TOLERANCE_VALUE_BELOW": {
          "type": "NUMBER",
          "nullable": true
},
        "TOLERANCE_QUANTITY_ABOVE": {
          "type": "NUMBER",
          "nullable": true
},
        "TOLERANCE_QUANTITY_BELOW": {
          "type": "NUMBER",
          "nullable": true
},
        "LIMITING_FACTOR": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
                    "QUANTITY",
                    "VALUE",
                    "QUANTITY_VALUE"
          ]
}
      },
      "fk_tables": [
        "GTM_LICENSE_CODE"
]
    }
  }
};