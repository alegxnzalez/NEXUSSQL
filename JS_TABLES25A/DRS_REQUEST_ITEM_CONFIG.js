// DRS_REQUEST_ITEM_CONFIG.js

window.DRS_REQUEST_ITEM_CONFIG = {
  "tables": {
    "DRS_REQUEST_ITEM_CONFIG": {
      "columns": {
        "REQUEST_ID": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The parent item request ID. "
        },
        "ITEM_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "A unique item number with in a particular request. "
        },
        "CONFIG_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true,
          "info": "Any config name associated with a request. "
        },
        "CONFIG_VALUE": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "A config value associated with a request config. "
        },
        "PARTITION_KEY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The partition key for the purge process."
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
