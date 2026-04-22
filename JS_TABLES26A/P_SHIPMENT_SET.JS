// P_SHIPMENT_SET.js

window.P_SHIPMENT_SET = {
  "tables": {
    "P_SHIPMENT_SET": {
      "description": "Defines selection criterion for building a shipment set",
      "columns": {
        "P_SHIPMENT_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "P_SHIPMENT_SET_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "BEGIN_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Only shipments whose start date is after the begin_date are selected"
},
        "END_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Only shipments whose end date is before the end_date are selected"
},
        "SAVED_QUERY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SAVED_QUERY",
          "info": "Only shipments that meet the criterion specified in this saved query are selected"
},
        "GEO_HIERARCHY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GEO_HIERARCHY_PROFILE",
          "info": "Defines the 'good' geographies so we know which lanes to bring over to procurement"
},
        "SOURCE_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION"
},
        "DEST_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION"
},
        "SHIPMENT_SET_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "OCEAN_SHIPMENT_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": true
},
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE"
},
        "SERVPROV_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV_PROFILE"
},
        "MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "MODE_PROFILE"
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
        "EQUIPMENT_REFERENCE_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_REFERENCE_UNIT",
          "info": "Shipments which are present with this Equipment Reference Unit ID."
},
        "IS_SPOT_SHIPMENT_SET": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "This column determines if the shipment set contains spot shipments or normal shipments. The default is N which is for normal shipmments. Set to Y for a shipment set with spot shipments."
}
      },
      "fk_tables": [
        "CR_PROJECT_P_SHIPMENT_SET",
        "LANE_SUMMARY_SHIP_SET_JOIN",
        "P_SHIPMENT_SET_D"
]
    }
  }
};