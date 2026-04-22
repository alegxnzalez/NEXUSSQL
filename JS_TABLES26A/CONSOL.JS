// CONSOL.js

window.CONSOL = {
  "tables": {
    "CONSOL": {
      "columns": {
        "CONSOL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the consol."
},
        "CONSOL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the consol."
},
        "CONSOL_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
                    "CHARTER VOYAGE STOWAGE",
                    "FLIGHT",
                    "OCEAN FCL",
                    "OCEAN BULK",
                    "GROUND"
          ],
          "info": "Consol type can be Charter Voyage Stowage, Flight, or Ocean FCL."
},
        "CHARTER_VOYAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CHARTER_VOYAGE",
          "info": "The GID for the charter voyage associated with the consol. Charter voyage is assigned for consol type of Charter Voyage Stowage."
},
        "STOWAGE_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STOWAGE_MODE",
          "info": "The GID for the stowage mode related to this consol. Stowage modes provide a way to identify how the shipment will be stowed. When an order release is booked for a voyage, the system needs to determine the best stowage mode and subsequently the best voyage that supports that stowage mode. To determine the best stowage mode, you can create preference rules that are evaluated. This rule will, based on certain attributes on the order release, provide a preferred list of stowage modes that can be used for that order. Note: You can also define a stowage mode directly on an order and it will override any stowage mode preference rules."
},
        "ALLOCATED_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Allocated weight represents the original agreed-upon capacity for this stowage mode on the charter voyage."
},
        "ALLOCATED_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The allocated weight UOM qualifier e.g., LB and KG."
},
        "ALLOCATED_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The allocated weight in the base UOM."
},
        "ALLOCATED_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Allocated volume represents the original agreed-upon capacity for this stowage mode on the charter voyage."
},
        "ALLOCATED_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The allocated volume UOM qualifier e.g., CU IN."
},
        "ALLOCATED_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The allocated volume in the base UOM."
},
        "ALLOCATED_NUM_TEU": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Allocated TEU represents the original agreed-upon twenty foot equivalent unit capacity for this stowage mode on the charter voyage."
},
        "ALLOCATED_NUM_FEU": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Allocated FEU represents the original agreed-upon forty foot equivalent unit capacity for this stowage mode on the charter voyage."
},
        "MAX_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Maximum weight represents the maximum capacity for this stowage mode on the charter voyage."
},
        "MAX_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The maximum weight UOM qualifier e.g., LB and KG."
},
        "MAX_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The maximum weight in the base UOM."
},
        "MAX_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Maximum volume represents the maximum capacity for this stowage mode on the charter voyage."
},
        "MAX_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The maximum volume UOM qualifier e.g., CU IN."
},
        "MAX_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The maximum volume in the base UOM."
},
        "MAX_NUM_TEU": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Maximum number of TEU represents the maximum twenty foot equivalent unit capacity for this stowage mode on the charter voyage."
},
        "MAX_NUM_FEU": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Maximum FEU represents the maximum forty foot equivalent unit capacity for this stowage mode on the charter voyage."
},
        "COMMITTED_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Committed weight represents the committed capacity on the pre-bookings for this stowage mode on the charter voyage. The committed weight can only be edited when the consol status is READY-TO-COMMIT."
},
        "COMMITTED_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The committed weight UOM qualifier e.g., LB and KG."
},
        "COMMITTED_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The committed weight in the base UOM."
},
        "COMMITTED_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Committed volume represents the committed capacity for this stowage mode on the charter voyage. The committed volume can only be edited when the consol status is READY-TO-COMMIT."
},
        "COMMITTED_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The committed volume UOM qualifier e.g., CU IN."
},
        "COMMITTED_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The committed volume in the base UOM."
},
        "COMMITTED_NUM_TEU": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Committed number of TEU represents the committed number of twenty foot equivalent unit capacity for this stowage mode on the charter voyage. The committed TEU can only be edited when the consol status is READY-TO-COMMIT."
},
        "COMMITTED_NUM_FEU": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Committed FEU represents the committed number of forty foot equivalent unit capacity for this stowage mode on the charter voyage. The committed FEU can only be edited when the consol status is READY-TO-COMMIT."
},
        "BOOKED_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Represents the booked weight capacity that is booked on the voyage for shipments planned using order releases (production lot orders). These values are calculated each time an order is booked on the consol using the Build Buy Shipment on Primary Leg action (from the Order Release manager)."
},
        "BOOKED_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The booked weight UOM qualifier e.g., LB and KG."
},
        "BOOKED_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The booked weight in the base UOM."
},
        "BOOKED_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Represents the booked volume capacity that is booked on the voyage for shipments planned using order releases (production lot orders). These values are calculated each time an order is booked on the consol using the Build Buy Shipment on Primary Leg action (from the Order Release manager)."
},
        "BOOKED_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The booked volume UOM qualifier e.g., CU IN."
},
        "BOOKED_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The booked volume in the base UOM."
},
        "BOOKED_NUM_TEU": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Represents the booked TEU capacity that is booked on the voyage for shipments planned using order releases (production lot orders). These values are calculated each time an order is booked on the consol using the Build Buy Shipment on Primary Leg action (from the Order Release manager)."
},
        "BOOKED_NUM_FEU": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Represents the booked FEU capacity that is booked on the voyage for shipments planned using order releases (production lot orders). These values are calculated each time an order is booked on the consol using the Build Buy Shipment on Primary Leg action (from the Order Release manager)."
},
        "PRODUCED_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Produced weight is a weight values that is not calculated and is user-defined."
},
        "PRODUCED_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The produced weight UOM qualifier e.g., LB and KG."
},
        "PRODUCED_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The produced weight in the base UOM."
},
        "PRODUCED_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Produced volume is a volume values that is not calculated and is user-defined."
},
        "PRODUCED_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The produced volume UOM qualifier e.g., CU IN."
},
        "PRODUCED_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The produced volume in the base UOM."
},
        "PRODUCED_NUM_TEU": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Produced TEU is a TEU value that is not calculated and is user-defined."
},
        "PRODUCED_NUM_FEU": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Produced FEU is a FEU value that is not calculated and is user-defined."
},
        "PERSPECTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "B",
                    "S"
          ],
          "info": "Perspective - Buy or Sell."
},
        "FLIGHT_INSTANCE_ID": {
          "type": "NUMBER",
          "nullable": true,
          "foreign_key": "FLIGHT_INSTANCE",
          "info": "The flight instance ID this consol is created from when the consol is a flight consol."
},
        "HAZMAT_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
                    "HAZMAT ONLY",
                    "NO HAZMAT",
                    "HAZMAT ALLOWED"
          ],
          "info": "Hazmat type. One of three values: HAZMAT ONLY, NO HAZMAT, HAZMAT ALLOWED."
},
        "ITINERARY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITINERARY_PROFILE",
          "info": "The GID for the assigned itinerary profile. The itinerary profile defines the consol's applicability to legs."
},
        "CONSOLIDATION_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONSOLIDATION_TYPE",
          "info": "The GID for the assigned consolidation type on the consol. A consolidation type can be assigned to any order release or job for informational purposes. Consolidation types can also be included in a consolidation type profile that can then be used as criteria for the automatic assignment of non-freight related charges to a job."
},
        "USER_DEFINED1_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes for the object."
},
        "USER_DEFINED2_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes for the object."
},
        "USER_DEFINED3_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes for the object."
},
        "USER_DEFINED4_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes for the object."
},
        "USER_DEFINED5_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes for the object."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
},
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "PLACE_RECEIPT_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Specifies a place of receipt location other than the port of loading. If specified this will add a stop to the consol shipment created."
},
        "PLACE_DELIVER_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Specifies a place of delivery other than the port of discharge. If specified this will add a stop to the consol shipment created."
},
        "PORT_OF_LOAD_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The port of loading for transport."
},
        "PORT_OF_DIS_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The port of discharge for transport."
},
        "INCO_TERM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INCO_TERM",
          "info": "The GID for the incoterms associated with the consol."
},
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV",
          "info": "The GID for the carrier. If blank, look at the voyage table."
},
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSPORT_MODE",
          "info": "The GID for the transportation mode for the consol."
},
        "INTENDED_VESSEL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The intended vessel gid. The vessel gid may not be in the system yet and therefore there is no foreign key restriction."
},
        "INTENDED_VOYAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The intended voyage gid. The voyage gid may not be in the system yet and therefore there is no foreign key restriction."
},
        "INTENDED_DEPARTURE_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Intended estimated time of departure."
},
        "INTENDED_ARRIVAL_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Intended estimated time of arrival."
},
        "FLEX_COMMODITY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "FLEX_COMMODITY_QUAL",
          "info": "A GID to define the type of the code. E.g.. HTS, SITC, STCC, NMFC etc."
},
        "FLEX_COMMODITY_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The user-defined commodity code. E.g.. the HTS, NMFC, SITC, STCC codes."
},
        "ONE_SHIPMENT_PER_CONTAINER": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "This flag will only be used when consol_type is OCEAN FCL. If it is 'Y', one shipment will be created for each container specified on the consol. If it is 'N', one shipment will be created for all the containers specified on the consol. The default value is 'N'."
},
        "FLEX_COMMODITY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "FLEX_COMMODITY_PROFILE",
          "info": "The flexible commodity profile ID that associates to the consol."
},
        "EQUIPMENT_REFERENCE_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_REFERENCE_UNIT",
          "info": "The GID for the equipment group reference unit being defined."
},
        "MAX_NUM_REFERENCE_UNITS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The maximum number of equipment reference units that can be held in the consol."
},
        "MAX_NUM_EQUIPMENT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The maximum number of equipment that can be held in the consol."
},
        "INTENDED_GROUND_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The intended ground service gid. The ground service gid may not be in the system yet and therefore there is no foreign key restriction."
},
        "CUTOFF_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "A duration that is subtracted from the consol shipment departure time and populated as the Operation Late Delivery Date of the previous leg order movement."
},
        "CUTOFF_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "CUTOFF_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "CONSOL_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONSOL_GROUP",
          "info": "The GID for the consol group being defined."
}
      },
      "fk_tables": [
        "CONSOL_EQUIP_GROUP_D",
        "CONSOL_INVOLVED_PARTY",
        "CONSOL_REFNUM",
        "CONSOL_REMARK",
        "CONSOL_STATUS",
        "JOB",
        "SHIPMENT"
]
    }
  }
};