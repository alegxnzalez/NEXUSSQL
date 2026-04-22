// GTM_TIP_OPERATION.js

window.GTM_TIP_OPERATION = {
  "tables": {
    "GTM_TIP_OPERATION": {
      "description": "Trade Incentive Program Operation",
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
        "GTM_TIP_OPERATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Trade Incentive Program Operation GID"
},
        "GTM_TIP_OPERATION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Trade Incentive Program Operation XID"
},
        "GTM_TIP_OPERATION_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_TIP_OPERATION_SET",
          "info": "Trade Incentive Program Operation Set GID"
},
        "OPERATION_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Operation Name"
},
        "OPERATION_TYPE": {
          "type": "VARCHAR2(16)",
          "nullable": false,
          "values": [
                    "CLAIM",
                    "NOCLAIM"
          ],
          "info": "Operation Type - Claim/No claim"
},
        "OBJECT_TYPE": {
          "type": "VARCHAR2(16)",
          "nullable": false,
          "values": [
                    "GTM_SHIPMENT",
                    "GTM_TRANSACTION"
          ],
          "info": "Object Type - Declaration/Trade Transaction"
},
        "OBJECT_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_TRANSACTION",
          "info": "Transaction/Declaration Template GID"
},
        "DATE_OF_OPERATION": {
          "type": "VARCHAR2(16)",
          "nullable": false,
          "values": [
                    "ACTION_DATE",
                    "ENTRY_DATE"
          ],
          "info": "Date of Operation - Date of Action/Date of Entry"
},
        "TRANSACTION_DATA_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_DT_CONFIG",
          "info": "Transaction Data Configuration GID"
},
        "DECLARATION_DATA_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_DT_CONFIG",
          "info": "Declaration Data Configuration GID"
}
      },
      "fk_tables": []
    }
  }
};