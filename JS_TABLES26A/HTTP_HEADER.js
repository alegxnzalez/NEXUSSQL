// HTTP_HEADER.js

window.HTTP_HEADER = {
  "tables": {
    "HTTP_HEADER": {
      "description": "Custom HTTP header parameter.",
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
        "HTTP_HEADER_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "HTTP_HEADER_PROFILE",
          "info": "A GID to specify the HTTP header profile."
},
        "PARAMETER_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The name of the custom parameter."
},
        "PARAMETER_VALUE": {
          "type": "VARCHAR2(250)",
          "nullable": true,
          "info": "Holds the value of the custom parameter if IS_WALLET is false."
},
        "PARAMETER_WALLET_VALUE": {
          "type": "VARCHAR2(250)",
          "nullable": true,
          "info": "Holds the value of the custom parameter if IS_WALLET is true."
},
        "IS_WALLET": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Flag to specify if the value should be held in the wallet."
},
        "PARAMETER_TYPE": {
          "type": "VARCHAR2(250)",
          "nullable": false,
          "values": [
                    "STATIC",
                    "SAVED_QUERY",
                    "PROPERTY"
          ],
          "info": "Holds values of STATIC, SAVED_QUERY, or PROPERTY. This is used to dynamically extract values from the parameter_value column."
}
      },
      "fk_tables": []
    }
  }
};