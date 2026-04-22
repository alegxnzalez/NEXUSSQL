// CLAIM_COST.js

window.CLAIM_COST = {
  "tables": {
    "CLAIM_COST": {
      "columns": {
        "CLAIM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CLAIM",
          "info": "The claim GID. "
        },
        "COST_SEQ_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Sequence number to keep costs unique. "
        },
        "COST": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Value of the claim cost. "
        },
        "COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "Currency GID for the claim cost. "
        },
        "COST_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Base value for the claim cost. "
        },
        "CLAIM_COST_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CLAIM_COST_TYPE",
          "info": "Cost type of the claim cost. These values are a combination of PUBLIC types shippped with the system and types specified by the user. The cost type will indicate if this cost should be added or subtracted from the claim damage/loss value. "
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
          "info": "The GID for the payor contact. "
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
