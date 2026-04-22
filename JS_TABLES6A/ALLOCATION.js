// ALLOCATION.js

window.ALLOCATION = {
  "tables": {
    "ALLOCATION": {
      "columns": {
        "ALLOC_SEQ_NO": {
          "type": "NUMBER(8)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ALLOCATION_BASE"
        },
        "ORDER_RELEASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_RELEASE",
          "info": "A unique identifier created by the system for the order release. the gid contains the domain portion. "
        },
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIPMENT",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "PRIVATE_COST": {
          "type": "NUMBER()",
          "nullable": false
        },
        "PRIVATE_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "PRIVATE_COST_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "PRIVATE_COST in base units. "
        },
        "BASE_COST": {
          "type": "NUMBER()",
          "nullable": false
        },
        "BASE_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "BASE_COST_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "BASE_COST in base units. "
        },
        "TOTAL_ALLOC_COST": {
          "type": "NUMBER()",
          "nullable": false
        },
        "TOTAL_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "TOTAL_ALLOC_COST_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "TOTAL_ALLOC_COST in base units. "
        },
        "EXCHANGE_RATE_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "EXCHANGE_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXCHANGE_RATE"
        },
        "BASE_COST_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "functional currency amount for base_cost "
        },
        "BASE_COST_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "PRIVATE_COST_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "functional currency amount for private_cost "
        },
        "PRIVATE_COST_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "TOTAL_ALLOC_C_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "functional currency amount for total_alloc_cost"
        },
        "TOTAL_ALLOC_C_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
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
