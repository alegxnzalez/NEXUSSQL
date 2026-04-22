// GTM_TIP_ENTRY_EXIT_CONFIG.js

window.GTM_TIP_ENTRY_EXIT_CONFIG = {
  "tables": {
    "GTM_TIP_ENTRY_EXIT_CONFIG": {
      "description": "Trade Incentive Program Entry/Exit Configuration",
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
        "GTM_TRADE_INCENTIVE_PGM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRADE_INCENTIVE_PROGRAM",
          "info": "Trade Incentive Program GID"
},
        "SEQUENCE_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Sequence Number"
},
        "GTM_ENTRY_EXIT_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_ENTRY_EXIT_PROFILE",
          "info": "Entry/Exit Profile GID"
},
        "MOVEMENT_TYPE": {
          "type": "VARCHAR2(8)",
          "nullable": false,
          "values": [
                    "ENTRY",
                    "EXIT"
          ],
          "info": "Movement Type - Entry/Exit"
},
        "INVENTORY_TRACKING_TYPE": {
          "type": "VARCHAR2(8)",
          "nullable": false,
          "values": [
                    "CUSTOMS",
                    "PHYSICAL",
                    "BOTH"
          ],
          "info": "Inventory Tracking Type - Customs/Physical/Both"
},
        "ITEM_EVALUATION_CRITERIA": {
          "type": "VARCHAR2(32)",
          "nullable": false,
          "values": [
                    "ITEM",
                    "COMPONENTS",
                    "ITEM OR COMPONENTS"
          ],
          "info": "Item Evaluation Criteria - Item/Components/Item or Components - kind of goods to be used for matching Exit Line to Inventory"
}
      },
      "fk_tables": []
    }
  }
};