// RATE_FACTOR.js

window.RATE_FACTOR = {
  "tables": {
    "RATE_FACTOR": {
      "columns": {
        "RATE_FACTOR_SOURCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_FACTOR_SOURCE"
},
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": false,
          "key_value": true
},
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true
},
        "FACTOR_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "RUN_GROUP_ID": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "FACTOR_VALUE": {
          "type": "NUMBER",
          "nullable": false
},
        "IS_PROCESSED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
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