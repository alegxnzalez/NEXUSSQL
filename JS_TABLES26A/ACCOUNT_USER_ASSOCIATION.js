// ACCOUNT_USER_ASSOCIATION.js

window.ACCOUNT_USER_ASSOCIATION = {
  "tables": {
    "ACCOUNT_USER_ASSOCIATION": {
      "columns": {
        "GL_USER_GID": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GL_USER",
          "info": "GC3 user id."
},
        "ACCOUNT_NUMBER": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true,
          "info": "Shipment account number."
},
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Whether the user is actively monitoring the account."
},
        "POSTAL_CODE": {
          "type": "VARCHAR2(15)",
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