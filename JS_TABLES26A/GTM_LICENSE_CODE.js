// GTM_LICENSE_CODE.js

window.GTM_LICENSE_CODE = {
  "tables": {
    "GTM_LICENSE_CODE": {
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
          "key_value": true,
          "foreign_key": "GTM_LICENSE_TYPE"
},
        "LICENSE_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "LICENSE_CODE_NAME": {
          "type": "VARCHAR2(225)",
          "nullable": true
},
        "LICENSE_CODE_DESCRIPTION": {
          "type": "VARCHAR2(225)",
          "nullable": true
},
        "LIMITING_FACTOR": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "values": [
                    "QUANTITY",
                    "VALUE",
                    "QUANTITY_VALUE"
          ]
}
      },
      "fk_tables": [
        "GTM_LICENSE",
        "GTM_LICENSE_CODE_OPTION"
]
    }
  }
};