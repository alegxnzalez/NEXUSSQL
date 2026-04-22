// ORDER_RELEASE_SERVICE.js

window.ORDER_RELEASE_SERVICE = {
  "tables": {
    "ORDER_RELEASE_SERVICE": {
      "columns": {
        "ORDER_RELEASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_RELEASE",
          "info": "The order release GID for this customer service. "
        },
        "CUSTOMER_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CUSTOMER_SERVICE",
          "info": "The customer service GID for this customer service. "
        },
        "EXECUTED_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "It will be reset to the date when this service template is applied last time. "
        },
        "IS_PRORITY_OVERWRITE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If this field is Y, this customer service will be treated as the highest priority. It will be reset to N after the service template is applied. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
        }
      },
      "fk_tables": []
    }
  }
};
