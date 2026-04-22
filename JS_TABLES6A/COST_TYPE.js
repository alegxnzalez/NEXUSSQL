// COST_TYPE.js

window.COST_TYPE = {
  "tables": {
    "COST_TYPE": {
      "columns": {
        "COST_TYPE_GID": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "key_value": true,
          "info": "Cost type id "
        },
        "COST_TYPE_XID": {
          "type": "VARCHAR2(1)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Description of cost type"
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
        "ALLOCATION_RULE_DETAIL",
        "INVOICE_LINEITEM",
        "LINE_APPROVE_TOLERANCE_DETAIL",
        "ORDER_RELEASE_ACCRUAL",
        "SHIPMENT_COST"
      ]
    }
  }
};
