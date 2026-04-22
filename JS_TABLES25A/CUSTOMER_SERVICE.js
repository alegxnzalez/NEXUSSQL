// CUSTOMER_SERVICE.js

window.CUSTOMER_SERVICE = {
  "tables": {
    "CUSTOMER_SERVICE": {
      "columns": {
        "CUSTOMER_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Primary key of the table. "
        },
        "CUSTOMER_SERVICE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true
        },
        "PRIORITY": {
          "type": "NUMBER(8)",
          "nullable": false,
          "info": "Highest priority is 1. Bigger number has lower priority. "
        },
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Only the active customer services will be assigned to order. "
        },
        "ORDER_RELEASE_TEMPLATE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ORDER_RELEASE",
          "info": "OrderRelease with is_template='Y' and template_type='Service'"
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
        "ORDER_RELEASE_SERVICE",
        "SERVICE_TEMPLATE"
      ]
    }
  }
};
