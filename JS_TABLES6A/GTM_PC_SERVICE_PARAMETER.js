// GTM_PC_SERVICE_PARAMETER.js

window.GTM_PC_SERVICE_PARAMETER = {
  "tables": {
    "GTM_PC_SERVICE_PARAMETER": {
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
        "GTM_SERVICE_PARAMETER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_SERVICE_PARAMETER"
        },
        "TRADE_DIRECTION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "I",
            "E"
          ],
          "key_value": true,
          "info": "Trade Direction of the classification. "
        },
        "GTM_PROD_CLASS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_PROD_CLASS_TYPE",
          "info": "Product Classification Type of the classification."
        }
      },
      "fk_tables": []
    }
  }
};
