// ORDER_MOVEMENT.js

window.ORDER_MOVEMENT = {
  "tables": {
    "ORDER_MOVEMENT": {
      "columns": {
        "ORDER_MOVEMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the order movement. "
        },
        "ORDER_MOVEMENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the order movement. "
        },
        "ORDER_RELEASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ORDER_RELEASE",
          "info": "The order release GID that is the parent for the order movement. "
        },
        "IS_TEMPORARY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator for whether this order movement can coexist with shipments. If this flag is true, the order movement will be removed once the order movement is planned on shipments. Otherwise the order movement's status is set to PLANNED-FINAL and stays in the system. "
        },
        "CREATION_PROCESS_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
            "CONVERSION GENERATED",
            "USER ENTERED",
            "SYSTEM-ACTIONS",
            "SYSTEM-ITINERARY"
          ],
          "info": "The creation process type, examples are from an itinerary (SYSTEM-ITINERARY) or from a shipment (SYSTEM-ACTIONS). "
        },
        "SEQ_NO": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The sequence number used to define where in the order release delivery path the order movement resides. "
        },
        "PERSPECTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Indicates whether this order movement is part of the buy or sell perspective and hence the associated shipments. "
        },
        "SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The source of the order movement and it can be null for the planning logic to determine the best one. "
        },
        "IS_FIXED_SRC": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates whether the source location on this order movement is the real source location or it is derived from the source location of its upstream shipments. "
        },
        "DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The destination of the order movement and it can be null for the planning logic to determine the best one. "
        },
        "IS_FIXED_DEST": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "N",
            "Y"
          ],
          "info": "Indicates whether the destination location on this order movement is the real source location or it is derived from the source location of its upstream shipments. "
        },
        "EARLY_PICKUP_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The earliest pickup of this order movement. "
        },
        "OPERATION_EARLY_PICKUP_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The date is calculated from upstream shipments' end time. "
        },
        "LATE_PICKUP_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The latest pickup time of this order movement. "
        },
        "EARLY_DELIVERY_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The earliest delivery of this order movement. "
        },
        "LATE_DELIVERY_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The latest delivery of this order movement. "
        },
        "OPERATION_LATE_DELIVERY_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "This date is calculated from downstream shipments' start time. "
        },
        "REUSE_EQUIPMENT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "The reuse equipment flag indicating that the order movement will use the shipment equipment record from the previous leg. This is initially taken from the itinerary if the order movement was created from one. "
        },
        "PARENT_SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The parent order movement source location ID if this is a child order movement built from network planning engine. "
        },
        "PARENT_DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The parent order movement destination location ID if this is a child order movement built from network planning engine. "
        },
        "ORIGINAL_LEG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LEG",
          "info": "The original leg ID from the itinerary associated to the original leg position. "
        },
        "ORIGINAL_LEG_POSITION": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The position of the original leg. The main leg's leg position is 0. Legs left to the main leg have positions -1, -2, etc. Legs right to the main leg have positions 1, 2, etc. "
        },
        "BULK_PLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BULK_PLAN",
          "info": "The bulk plan GID if this order movement was created through a bulk planning run. "
        },
        "ORIGINAL_SELL_OM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ORDER_MOVEMENT",
          "info": "The original buy order movement GID used if the order movement is split for additional planning. "
        },
        "TOTAL_SHIP_UNIT_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total ship unit count for this order movement. Can be 1 for a discrete item or greater if it is modeling a bulk count order. "
        },
        "TOTAL_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total weight for this order movement. "
        },
        "TOTAL_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The total weight unit of measure. "
        },
        "TOTAL_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total weight in the base unit of measure. "
        },
        "TOTAL_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total volume for this order movement. "
        },
        "TOTAL_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The total volume unit of measure. "
        },
        "TOTAL_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total volume in the base unit of measure. "
        },
        "USER_DEFINED1_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Stores a user-defined icon that will appear within the user interface to help visually identify attributes for the object. "
        },
        "USER_DEFINED2_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Stores a user-defined icon that will appear within the user interface to help visually identify attributes for the object. "
        },
        "USER_DEFINED3_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Stores a user-defined icon that will appear within the user interface to help visually identify attributes for the object. "
        },
        "USER_DEFINED4_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Stores a user-defined icon that will appear within the user interface to help visually identify attributes for the object. "
        },
        "USER_DEFINED5_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Stores a user-defined icon that will appear within the user interface to help visually identify attributes for the object. "
        },
        "SHIP_UNIT_WIDTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The width of the ship unit. This column will show value only if the order movement has one ship unit. "
        },
        "SHIP_UNIT_WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the ship unit width. This column will show value only if the order movement has one ship unit. "
        },
        "SHIP_UNIT_WIDTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The ship unit width in base units. This column will show value only if the order movement has one ship unit. "
        },
        "SHIP_UNIT_LENGTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The length of the ship unit. This column will show value only if the order movement has one ship unit. "
        },
        "SHIP_UNIT_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for ship unit length. This column will show value only if the order movement has one ship unit. "
        },
        "SHIP_UNIT_LENGTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The ship unit length in base units. This column will show value only if the order movement has one ship unit. "
        },
        "SHIP_UNIT_HEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The height of the ship unit. This column will show value only if the order movement has one ship unit. "
        },
        "SHIP_UNIT_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for ship unit height. This column will show value only if the order movement has one ship unit. "
        },
        "SHIP_UNIT_HEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The ship unit height in base units. This column will show value only if the order movement has one ship unit. "
        },
        "SHIP_UNIT_DIAMETER": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The diameter of the ship unit. This column will show value only if the order movement has one ship unit. "
        },
        "SHIP_UNIT_DIAMETER_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the ship unit diameter. This column will show value only if the order movement has one ship unit. "
        },
        "SHIP_UNIT_DIAMETER_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The ship unit diameter in base units. This column will show value only if the order movement has one ship unit. "
        },
        "TRANSPORT_HANDLING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "The transport handling unit. This column will show value only if the order movement has one ship unit. "
        },
        "INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "A definable indicator for the order movement. "
        },
        "PICKUP_ROUTING_SEQUENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROUTING_SEQUENCE",
          "info": "This routing sequence identifier applies for the source location of that specific order movement and will override any order release routing sequence information at these location. "
        },
        "DROPOFF_ROUTING_SEQUENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROUTING_SEQUENCE",
          "info": "This routing sequence identifier applies for the source location of that specific order movement and will override any order release routing sequence information at these location. "
        },
        "PRIORITY": {
          "type": "NUMBER(3)",
          "nullable": false,
          "info": "The priority associated with an order movement. "
        },
        "SOURCE_TAG": {
          "type": "VARCHAR2(22)",
          "nullable": true,
          "info": "The tag value for the source location of the order movement. "
        },
        "DEST_TAG": {
          "type": "VARCHAR2(15)",
          "nullable": true,
          "info": "The tag value for the destination location of the order movement. "
        },
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIPMENT",
          "info": "The shipment GID associated to the order movement if it is scheduled on a shipment. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "The date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update. "
        },
        "MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MODE_PROFILE",
          "info": "The mode profile identifier contains the unique identifier for the mode profile for the leg. "
        },
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE",
          "info": "The equipment group GID contains the GID for the equipment group profile for the leg. "
        },
        "CALCULATE_SERVICE_TIME": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator for whether to calculate the service time when creating the shipment for this order movement. Initially derived from the itinerary. "
        },
        "CALCULATE_CONTRACTED_RATE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator for whether to calculate the service time when creating the shipment for this order movement. Initially derived from the itinerary. "
        },
        "EXPECTED_TRANSIT_TIME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Expected transit time contains the expected time for this leg of the shipment to take. "
        },
        "EXPECTED_TRANSIT_TIME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Expected transit time in base unit of measure. "
        },
        "EXPECTED_TRANSIT_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Expected transit time unit of measure. "
        },
        "EXPECTED_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Expected cost contains the expected cost for the leg. "
        },
        "EXPECTED_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Expected cost in the base currency. "
        },
        "EXPECTED_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "Expected cost currency contains the currency for the expected cost of the leg. "
        },
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_OFFERING",
          "info": "The rate offering GID constraint for the order movement. "
        },
        "RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO",
          "info": "The rate detail GID constraint for the order movement. "
        },
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP",
          "info": "The equipment group GID constraint for the order movement. "
        },
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSPORT_MODE",
          "info": "The transport mode GID constraint for the order movement. "
        },
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV",
          "info": "The service provider GID constraint for the order movement. "
        },
        "SERVPROV_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV_PROFILE",
          "info": "The service provider profile GID constraint for the order movement. "
        },
        "RATE_SERVICE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_SERVICE_PROFILE",
          "info": "The rate service profile GID constraint for the order movement. "
        },
        "IS_TEMPLATE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator for whether this order movement is to be used as a template. "
        },
        "SHIP_WITH_GROUP": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The ship with group GID constraint for the order movement. "
        },
        "LEG_CLASSIFICATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LEG_CLASSIFICATION",
          "info": "The leg classification is used for order movement group building. The order movements plan and match to the itinerary leg classification value. "
        },
        "LEG_CONSOLIDATION_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LEG_CONSOLIDATION_GROUP",
          "info": "The planning engine sets the leg consolidation group based on rules around the leg classification value. "
        },
        "IS_NETWORK_ROUTABLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator for whether this order movement can be planned using the network routing model. "
        },
        "ROUTING_CONSTRAINT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROUTING_CONSTRAINT",
          "info": "The routing constraint identifier shows the routing constraints that apply to this order movement and is only used when is network routable is set to true. "
        },
        "IS_ROUTING_FIXED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator for whether the routing constraints are fixed during subsequent planning actions. "
        },
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "LOADING_SPLIT_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
            "MUST SPLIT",
            "CANNOT SPLIT"
          ],
          "info": "To indicate if the SSUs associated with the order movement can be split (null), cannot be split or must split. "
        },
        "ORIGINAL_BUY_OM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ORDER_MOVEMENT",
          "info": "The original buy order movement identifier used if the order movement is split for additional planning. "
        },
        "ATTRIBUTE_NUMBER11": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER12": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER13": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER14": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER15": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER16": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER17": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER18": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER19": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER20": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_DATE11": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE12": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE13": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE14": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE15": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE16": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE17": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE18": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE19": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE20": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date"
        }
      },
      "fk_tables": [
        "JOB_ORDER_MOVEMENT_JOIN",
        "ORDER_MOVEMENT",
        "ORDER_MOVEMENT_D",
        "ORDER_MOVEMENT_INV_PARTY",
        "ORDER_MOVEMENT_LINK",
        "ORDER_MOVEMENT_REFNUM",
        "ORDER_MOVEMENT_REMARK",
        "ORDER_MOVEMENT_STATUS"
      ]
    }
  }
};
