// TENDER_SERVPROV_SPOT_RATE.js

window.TENDER_SERVPROV_SPOT_RATE = {
  "tables": {
    "TENDER_SERVPROV_SPOT_RATE": {
      "columns": {
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
},
        "I_TRANSACTION_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Foreign key to Tender Collaboration."
},
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SERVPROV",
          "info": "The service provider who received the SPOT tender bidding."
},
        "SPOT_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "ID of the Spot Rate created during the bidding process."
},
        "SPOT_RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RATE_OFFERING",
          "info": "The SPOT_RATE_OFFERING linked to this service provider."
},
        "CHARGE_AMOUNT1": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The charge amount for this spot cost."
},
        "CHARGE_AMOUNT1_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The charge amount indicated by this service provider in base units."
},
        "CHARGE_AMOUNT1_CURR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The currency of the charge amount."
},
        "CHARGE_MULTIPLIER1": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The cost operand for the charge amount."
},
        "CHARGE_UNIT1_COUNT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The unit value to be used in association with the charge multiplier."
},
        "CHARGE_UNIT1_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "UOM code for the charge unit field."
},
        "IS_APPROVED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "This field will be updated as Y, if this spot cost gets approved."
},
        "CHARGE_AMOUNT2": {
          "type": "NUMBER",
          "nullable": true
},
        "CHARGE_AMOUNT2_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "CHARGE_AMOUNT2_CURR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "CHARGE_MULTIPLIER2": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "CHARGE_UNIT2_COUNT": {
          "type": "NUMBER",
          "nullable": true
},
        "CHARGE_UNIT2_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "CHARGE_AMOUNT3": {
          "type": "NUMBER",
          "nullable": true
},
        "CHARGE_AMOUNT3_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "CHARGE_AMOUNT3_CURR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "CHARGE_MULTIPLIER3": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "CHARGE_UNIT3_COUNT": {
          "type": "NUMBER",
          "nullable": true
},
        "CHARGE_UNIT3_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};