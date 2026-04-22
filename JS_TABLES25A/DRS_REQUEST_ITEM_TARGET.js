// DRS_REQUEST_ITEM_TARGET.js

window.DRS_REQUEST_ITEM_TARGET = {
  "tables": {
    "DRS_REQUEST_ITEM_TARGET": {
      "columns": {
        "REQUEST_ID": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The parent item request ID. "
        },
        "TARGET_ITEM_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "A unique target item number within a request. "
        },
        "TARGET_URL": {
          "type": "VARCHAR2(2048)",
          "nullable": true
        },
        "EXT_SYS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "HTTP_METHOD": {
          "type": "VARCHAR2(20)",
          "nullable": true
        },
        "EXTRA_PATH": {
          "type": "VARCHAR2(2048)",
          "nullable": true
        },
        "COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Com method to be used to transport content. "
        },
        "IS_APPEND_NAME": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Append part name to target URL (default for all items). "
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
