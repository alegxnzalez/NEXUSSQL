// ROUTE_TEMPLATE.js

window.ROUTE_TEMPLATE = {
  "tables": {
    "ROUTE_TEMPLATE": {
      "columns": {
        "ROUTE_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Route template ID"
},
        "ROUTE_TEMPLATE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "CREATION_SOURCE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "values": [
                    "C",
                    "U",
                    "I"
          ],
          "info": "C: Import from CR; U: Created from UI; I: Import from intergration"
},
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Based on UTC timezone."
},
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Based on UTC timezone."
},
        "PERSPECTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "B",
                    "S",
                    "A"
          ],
          "info": "'B': BUY; 'S': SELL; 'A': ALL"
},
        "NUM_INSTANCES": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Copied from Strategic Tool 'Volume'"
},
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV",
          "info": "Not required when created; required when creating Instances"
},
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE",
          "info": "Not required when created; required when creating Instances"
},
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSPORT_MODE",
          "info": "Not required when created; required when creating Instances"
},
        "START_DEPOT_LOC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION"
},
        "END_DEPOT_LOC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION"
},
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "IS_CLOSED_LOOP": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "ALLOW_OVERLAPPING_SHIPMENTS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Allow shipment time window overlap"
},
        "STR_DURATION": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Copied from Strategic CR Product"
},
        "STR_DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "STR_DURATION_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "STR_LOADED_DISTANCE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Copied from Strategic CR Product"
},
        "STR_LOADED_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "STR_LOADED_DISTANCE_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "STR_DEADHEAD_DISTANCE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Copied from Strategic CR Product"
},
        "STR_DEADHEAD_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "STR_DEADHEAD_DISTANCE_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "STR_TOTAL_DISTANCE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Copied from Strategic CR Product"
},
        "STR_TOTAL_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "STR_TOTAL_DISTANCE_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "STR_DEADHEAD_PERC": {
          "type": "NUMBER",
          "nullable": true,
          "info": "=STR_DEADHEAD_DISTANCE/STR_TOTAL_DISTANCE"
},
        "STR_CONF_FACTOR": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Copied from Strategic CR Product"
},
        "SAVING_PER_INST": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Savings per Instance.  Copied from Strategic CR Product"
},
        "SAVING_PER_INST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
},
        "SAVING_PER_INST_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "USER_DEFINED1_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON"
},
        "USER_DEFINED2_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON"
},
        "USER_DEFINED3_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON"
},
        "USER_DEFINED4_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON"
},
        "USER_DEFINED5_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON"
},
        "INDICATOR": {
          "type": "VARCHAR2(1)",
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
      "fk_tables": [
        "ROUTE_INSTANCE",
        "ROUTE_TEMPLATE_INV_PARTY",
        "ROUTE_TEMPLATE_LEG",
        "ROUTE_TEMPLATE_REFNUM",
        "ROUTE_TEMPLATE_REMARK",
        "ROUTE_TEMPLATE_STATUS"
]
    }
  }
};