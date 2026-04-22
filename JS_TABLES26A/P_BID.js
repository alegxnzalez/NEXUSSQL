// P_BID.js

window.P_BID = {
  "tables": {
    "P_BID": {
      "description": "Carrier's bid for work on a lane",
      "columns": {
        "P_BID_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Unique identifier for the bid"
},
        "P_BID_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "P_BID_ROUND_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "P_BID_ROUND",
          "info": "Bid round to which the bid belongs"
},
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SERVPROV",
          "info": "Service provider who owns the bid"
},
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "X_LANE",
          "info": "Lane to which the bid applies"
},
        "BID_SEQUENCE_NUM": {
          "type": "NUMBER(8)",
          "nullable": false,
          "info": "Sequence number associated with the bid: 1, 2, 3... Example: The first time a servprov enters a bid against a lane, the bid sequence num is 1.  The second bid against the same lane, the bid sequence is 2, and so on.  In order to enter multiple bids against the same lane in the same round, something 'significant' must change, such as the equipment group or transit time"
},
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP",
          "info": "The equipment group associated with the bid"
},
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSPORT_MODE",
          "info": "The transport mode associated with the bid"
},
        "TRANSIT_TIME": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The transit time associated with the bid"
},
        "TRANSIT_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
},
        "TRANSIT_TIME_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "COMPUTED_COST": {
          "type": "NUMBER",
          "nullable": true
},
        "COMPUTED_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
},
        "COMPUTED_COST_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "MAX_PCT_LOADS_REQUESTED": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The maximum percentage of loads that the service provider is willing to take"
},
        "MIN_PCT_LOADS_REQUESTED": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The minimum percentage of loads that the service provider is willing to take"
},
        "IS_REFERENCE_BID": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "This is set to Y if this bid is a 'reference' bid.  A reference bid is one that isn't actually entered by a service provider, but is carried over from the operational system to serve as a cost baseline to provide a basis for comparison"
},
        "P_BID_PACKAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "P_BID_PACKAGE"
},
        "SOURCE_DESC": {
          "type": "VARCHAR2(842)",
          "nullable": true
},
        "DEST_DESC": {
          "type": "VARCHAR2(842)",
          "nullable": true
},
        "SOURCE_ARB_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "X_LANE"
},
        "DEST_ARB_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "X_LANE"
},
        "SOURCE_SOURCE_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION"
},
        "SOURCE_DEST_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION"
},
        "DEST_SOURCE_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION"
},
        "DEST_DEST_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION"
},
        "MIN_COUNT_LOADS_REQUESTED": {
          "type": "NUMBER",
          "nullable": true
},
        "MAX_COUNT_LOADS_REQUESTED": {
          "type": "NUMBER",
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
},
        "PICK_UP_DAYS": {
          "type": "NUMBER",
          "nullable": true
},
        "RATE_LOAD_DATA_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "RATING_MESSAGE": {
          "type": "VARCHAR2(300)",
          "nullable": true
},
        "CRT_LOAD_PROCESS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CRT_LOAD_PROCESS"
},
        "OTM_RATE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO"
},
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true
},
        "MARKED_FOR_PURGE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "info": "this column will identifies the rows which will be purged"
},
        "EQUIPMENT_REFERENCE_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_REFERENCE_UNIT",
          "info": "The equipment reference unit GID is assosiated with the equipment reference unit utilization of the shipments in the lane  summary."
}
      },
      "fk_tables": [
        "P_BID_REMARK",
        "P_BID_STATUS",
        "P_SOLUTION_D"
]
    }
  }
};