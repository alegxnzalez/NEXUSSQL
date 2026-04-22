// DM_TRANSACTION_LINEITEM.js

window.DM_TRANSACTION_LINEITEM = {
  "tables": {
    "DM_TRANSACTION_LINEITEM": {
      "description": "It captures the chargeable days and cost for demurrage transaction. Example include for the PVT car, its possible that there are both storage and detention charges applied for a demurrage transaction.",
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
        "DM_TRANSACTION_SEQ_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DM_TRANSACTION",
          "info": "DM_TRANSACTION_SEQ_NO contains the unique identifier for the demurrage transaction."
},
        "DM_TRANSACTION_LINEITEM_SEQ_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "DM_TRANSACTION_LINEITEM_SEQ_NO contains the unique identifier for the demurrage transaction lineitem."
},
        "SPECIAL_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SPECIAL_SERVICE",
          "info": "Determine the type of charge. Example could be Demurrage - Empty to Load. These are modeled as special services."
},
        "DWELL_DAYS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "length of time that elapsed from the moment a car reaches the destinations till its released."
},
        "CREDIT_DAYS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "days that are free of charge"
},
        "DEBIT_DAYS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "dwell days offset by credit days"
},
        "ADJUSTMENT_REASON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ADJUSTMENT_REASON",
          "info": "Reason Code for adjusting the chargeable days or charges."
},
        "IS_SYSTEM_GENERATED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Is the line item system generated."
},
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_OFFERING",
          "info": "Rate Offering linked to demurrage line item. Its helps to determine demurrage charges."
},
        "RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO",
          "info": "Rate Geo linked to demurrage transaction line item. Its helps to determine demurrage charges."
},
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIPMENT",
          "info": "Line item charges is linked as NFRC/demurrage charge shipment."
},
        "SECONDARY_CHARGE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SECONDARY_CHARGE_RULE",
          "info": "secondary charge rule ID"
},
        "CHARGE_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "N",
                    "I",
                    "O",
                    "S"
          ],
          "info": "Charge type possible values are NFRC shipment, inbound shipment, outbound shipment and Secondary charge shipment."
},
        "COST": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Line item Charges from the linked NFRC/Demurrage Charge Shipment."
},
        "COST_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
},
        "COST_FN": {
          "type": "NUMBER",
          "nullable": true
},
        "COST_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
}
      },
      "fk_tables": []
    }
  }
};