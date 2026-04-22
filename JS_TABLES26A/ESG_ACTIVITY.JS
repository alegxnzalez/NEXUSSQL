// ESG_ACTIVITY.js

window.ESG_ACTIVITY = {
  "tables": {
    "ESG_ACTIVITY": {
      "description": "This table is used for capturing the ESG (Environment, Social and Governance) Activity details for an activity performed in OTM.",
      "columns": {
        "ESG_ACTIVITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID of the ESG Activity."
},
        "ESG_ACTIVITY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID of the ESG Activity."
},
        "ESG_ACTIVITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ESG_ACTIVITY_TYPE",
          "info": "The ID of ESG Activity Type"
},
        "SCOPE_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "1",
                    "2",
                    "3"
          ],
          "info": "Scope of the ESG Activity. Valid Values are '1','2','3'"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description for the ESG Activity."
},
        "DATA_SOURCE": {
          "type": "VARCHAR2(15)",
          "nullable": false,
          "values": [
                    "GENERATED",
                    "INTEGRATION",
                    "MANUAL"
          ],
          "info": "Source from which the ESG Activity details are obtained. Valid Values are 'GENERATED', 'INTEGRATION', 'MANUAL'."
},
        "POSTED_ON": {
          "type": "DATE",
          "nullable": false,
          "info": "The date on which the activity is posted."
},
        "POSTING_TYPE": {
          "type": "VARCHAR2(15)",
          "nullable": false,
          "values": [
                    "PLANNED",
                    "ACTUAL"
          ],
          "info": "Defines the posting type ESG Activity. Valid Values are 'PLANNED' and 'ACTUAL'."
},
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DATA_QUERY_TYPE",
          "info": "Data Query Type of the business object for which the ESG Activity is captured."
},
        "OBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Business Object ID for which the ESG Activity is captured."
},
        "SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The Source Location ID for which the ESG Activity is captured."
},
        "DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The Destination Location ID for which the ESG Activity is captured."
},
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSPORT_MODE",
          "info": "Mode of the Transport used during the ESG Activity."
},
        "EQUIPMENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_TYPE",
          "info": "Equipment Type used for the ESG Activity."
},
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP",
          "info": "Equipment Group used for the ESG Activity."
},
        "TRANSPORT_HANDLING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "The Transport Handling Unit ID for the ESG Activity."
},
        "TRANSPORT_HANDLING_UNIT_COUNT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Count of the Transport Handling Unit for the ESG Activity."
},
        "DISTANCE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Distance traveled for the ESG Activity."
},
        "DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the distance."
},
        "DISTANCE_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Distance in the base unit of measure."
},
        "WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Weight of the shipment carried for the ESG Activity."
},
        "WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for weight."
},
        "WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Weight in the base unit of measure."
},
        "VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Volume of the shipment carried for the ESG Activity."
},
        "VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for volume."
},
        "VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Volume in the base unit of measure."
},
        "CO2_EMISSION": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Amount of Carbon emitted during the activity."
},
        "CO2_EMISSION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for CO2 emissions."
},
        "CO2_EMISSION_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "CO2 emissions in the base unit of measure."
},
        "CO2_EQ_EMISSION": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Amount of Carbon equivalent gases emitted during the activity."
},
        "CO2_EQ_EMISSION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for CO2 equivalent emissions."
},
        "CO2_EQ_EMISSION_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "CO2 equivalent emissions in the base unit of measure."
},
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACCESSORIAL_CODE",
          "info": "Accessorial Code ID associated with the ESG Activity."
},
        "NOTE": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Note for the ESG Activity."
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
        "SERVPROV_ALIAS": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Service Provider Alias of the service provider for which the ESG Activity is captured."
},
        "ESG_ACTIVITY_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ESG_ACTIVITY_RULE",
          "info": "The ESG Activity Rule ID used for generating this ESG Activity."
},
        "EMISSION_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EMISSION_RULE",
          "info": "The Emission Rule ID used for calculating the emissions for this ESG Activity."
}
      },
      "fk_tables": [
        "ESG_ACTIVITY_DETAIL",
        "ESG_ACTIVITY_EMISSION",
        "ESG_ACTIVITY_REMARK"
]
    }
  }
};