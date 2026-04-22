// ALLOCATION_BOV.js

window.ALLOCATION_BOV = {
  "tables": {
    "ALLOCATION_BOV": {
      "columns": {
        "ALLOC_SEQ_NO": {
          "type": "NUMBER(8)",
          "nullable": false
        },
        "ORDER_RELEASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "PRIVATE_COST": {
          "type": "NUMBER()",
          "nullable": false
        },
        "PRIVATE_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "PRIVATE_COST_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "BASE_COST": {
          "type": "NUMBER()",
          "nullable": false
        },
        "BASE_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "BASE_COST_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "TOTAL_ALLOC_COST": {
          "type": "NUMBER()",
          "nullable": false
        },
        "TOTAL_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "TOTAL_ALLOC_COST_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Domain of the User. Is used for creating the GID."
        }
      },
      "fk_tables": []
    }
  }
};
