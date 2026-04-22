// CLAIM_LINE_ITEM_COST.js

window.CLAIM_LINE_ITEM_COST = {
  "tables": {
    "CLAIM_LINE_ITEM_COST": {
      "columns": {
        "CLAIM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CLAIM_LINE_ITEM",
          "info": "The GID for the claim. Along with "
        },
        "LINE_ITEM_SEQ_NO": {
          "type": "NUMBER(9)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CLAIM_LINE_ITEM",
          "info": "The sequence number of the claim line item to which this cost is tied. "
        },
        "COST_SEQ_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The sequence number to keep costs on claim lines unique. "
        },
        "COST": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The cost amount. "
        },
        "COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "The currency for cost amount. "
        },
        "COST_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The base amount for cost. "
        },
        "CLAIM_COST_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CLAIM_COST_TYPE",
          "info": "The cost type such as DAMAGE or SALVAGE. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "PAYEE_CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONTACT",
          "info": "The GID for the payee contact. "
        },
        "PAYOR_CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONTACT",
          "info": "The GID for the payer contact. "
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
