// LOGISTICS_GUIDE_DETAIL.js

window.LOGISTICS_GUIDE_DETAIL = {
  "tables": {
    "LOGISTICS_GUIDE_DETAIL": {
      "columns": {
        "LOGISTICS_GUIDE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOGISTICS_GUIDE"
},
        "LG_DETAIL_SEQ_NO": {
          "type": "NUMBER(9)",
          "nullable": false,
          "key_value": true
},
        "SOURCE_ADDRESS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LG_ADDRESS"
},
        "DEST_ADDRESS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LG_ADDRESS"
},
        "ORDER_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ORDER_RELEASE"
},
        "ITINERARY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITINERARY_PROFILE"
},
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SERVPROV"
},
        "RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RATE_GEO"
},
        "TOTAL_COST": {
          "type": "NUMBER",
          "nullable": false
},
        "TOTAL_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
},
        "TOTAL_COST_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_OFFERING"
},
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "TRANSPORT_MODE"
},
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "EQUIPMENT_GROUP"
},
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE"
},
        "TRANSIT_TIME": {
          "type": "NUMBER",
          "nullable": false
},
        "TRANSIT_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
},
        "TRANSIT_TIME_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "ORDER_WEIGHT": {
          "type": "NUMBER",
          "nullable": false
},
        "ORDER_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
},
        "ORDER_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "COST_PER": {
          "type": "NUMBER",
          "nullable": false
},
        "COST_PER_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
},
        "COST_PER_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "IS_MULTI_MODE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "ITINERARY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITINERARY"
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
},
        "ROUTE_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROUTE_CODE"
}
      },
      "fk_tables": []
    }
  }
};