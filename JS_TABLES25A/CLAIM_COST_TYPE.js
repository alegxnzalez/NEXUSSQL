// CLAIM_COST_TYPE.js

window.CLAIM_COST_TYPE = {
  "tables": {
    "CLAIM_COST_TYPE": {
      "columns": {
        "CLAIM_COST_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Code for the cost type of a claim "
        },
        "CLAIM_COST_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Description of the cost type for a claim "
        },
        "COST_ACTIVITY": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "values": [
            "ADD",
            "SUBTRACT"
          ],
          "info": "Indicates if the cost adds or subtracts from the total damage/loss value of the claim.  'ADD' indicates it is a loss; 'SUBTRACT' indicates it is a negative cost for the claim, such as money credited for salvage."
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
        "CLAIM_COST",
        "CLAIM_LINE_ITEM_COST"
      ]
    }
  }
};
