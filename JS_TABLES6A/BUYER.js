// BUYER.js

window.BUYER = {
  "tables": {
    "BUYER": {
      "columns": {
        "BUYER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "A unique identifier to define the locations withing GC3. The gid contains the domain portion. "
        },
        "BUYER_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Same as gid except for the domain portion. "
        },
        "SERVICE_COPY_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
            "Copy if Null",
            "Replace"
          ],
          "info": "Defines how to apply service template to order."
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
      "fk_tables": [
        "BUYER_TEMPLATE",
        "SERVICE_TEMPLATE"
      ]
    }
  }
};
