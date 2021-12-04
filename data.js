let schedules = {
'ARI': ['TEN', 'MIN', 'JAX', 'LA', 'SF', 'CLE', 'HOU', 'GB', 'SF', 'CAR', 'SEA', 'CHI', 'LA', 'DET', 'IND', 'DAL', 'SEA'],
'ATL': ['PHI', 'TB', 'NYG', 'WAS', 'NYJ', 'MIA', 'CAR', 'NO', 'DAL', 'NE', 'JAX', 'TB', 'CAR', 'SF', 'DET', 'BUF', 'NO'],
'BAL': ['LV', 'KC', 'DET', 'DEN', 'IND', 'LAC', 'CIN', 'MIN', 'MIA', 'CHI', 'CLE', 'PIT', 'CLE', 'GB', 'CIN', 'LA', 'PIT'],
'BUF': ['PIT', 'MIA', 'WAS', 'HOU', 'KC', 'TEN', 'MIA', 'JAX', 'NYJ', 'IND', 'NO', 'NE', 'TB', 'CAR', 'NE', 'ATL', 'NYJ'],
'CAR': ['NYJ', 'NO', 'HOU', 'DAL', 'PHI', 'MIN', 'NYG', 'ATL', 'NE', 'ARI', 'WAS', 'MIA', 'ATL', 'BUF', 'TB', 'NO', 'TB'],
'CHI': ['LA', 'CIN', 'CLE', 'DET', 'LV', 'GB', 'TB', 'SF', 'PIT', 'BAL', 'DET', 'ARI', 'GB', 'MIN', 'SEA', 'NYG', 'MIN'],
'CIN': ['MIN', 'CHI', 'PIT', 'JAX', 'GB', 'DET', 'BAL', 'NYJ', 'CLE', 'LV', 'PIT', 'LAC', 'SF', 'DEN', 'BAL', 'KC', 'CLE'],
'CLE': ['KC', 'HOU', 'CHI', 'MIN', 'LAC', 'ARI', 'DEN', 'PIT', 'CIN', 'NE', 'DET', 'BAL', 'BAL', 'LV', 'GB', 'PIT', 'CIN'],
'DAL': ['TB', 'LAC', 'PHI', 'CAR', 'NYG', 'NE', 'MIN', 'DEN', 'ATL', 'KC', 'LV', 'NO', 'WAS', 'NYG', 'WAS', 'ARI', 'PHI'],
'DEN': ['NYG', 'JAX', 'NYJ', 'BAL', 'PIT', 'LV', 'CLE', 'WAS', 'DAL', 'PHI', 'LAC', 'KC', 'DET', 'CIN', 'LV', 'LAC', 'KC'],
'DET': ['SF', 'GB', 'BAL', 'CHI', 'MIN', 'CIN', 'LA', 'PHI', 'PIT', 'CLE', 'CHI', 'MIN', 'DEN', 'ARI', 'ATL', 'SEA', 'GB'],
'GB': ['NO', 'DET', 'SF', 'PIT', 'CIN', 'CHI', 'WAS', 'ARI', 'KC', 'SEA', 'MIN', 'LA', 'CHI', 'BAL', 'CLE', 'MIN', 'DET'],
'HOU': ['JAX', 'CLE', 'CAR', 'BUF', 'NE', 'IND', 'ARI', 'LA', 'MIA', 'TEN', 'NYJ', 'IND', 'SEA', 'JAX', 'LAC', 'SF', 'TEN'],
'IND': ['SEA', 'LA', 'TEN', 'MIA', 'BAL', 'HOU', 'SF', 'TEN', 'NYJ', 'JAX', 'BUF', 'TB', 'HOU', 'NE', 'ARI', 'LV', 'JAX'],
'JAX': ['HOU', 'DEN', 'ARI', 'CIN', 'TEN', 'MIA', 'SEA', 'BUF', 'IND', 'SF', 'ATL', 'LA', 'TEN', 'HOU', 'NYJ', 'NE', 'IND'],
'KC': ['CLE', 'BAL', 'LAC', 'PHI', 'BUF', 'WAS', 'TEN', 'NYG', 'GB', 'LV', 'DAL', 'DEN', 'LV', 'LAC', 'PIT', 'CIN', 'DEN'],
'LV': ['BAL', 'PIT', 'MIA', 'LAC', 'CHI', 'DEN', 'PHI', 'NYG', 'KC', 'CIN', 'DAL', 'WAS', 'KC', 'CLE', 'DEN', 'IND', 'LAC'],
'LA': ['CHI', 'IND', 'TB', 'ARI', 'SEA', 'NYG', 'DET', 'HOU', 'TEN', 'SF', 'GB', 'JAX', 'ARI', 'SEA', 'MIN', 'BAL', 'SF'],
'LAC': ['WAS', 'DAL', 'KC', 'LV', 'CLE', 'BAL', 'NE', 'PHI', 'MIN', 'PIT', 'DEN', 'CIN', 'NYG', 'KC', 'HOU', 'DEN', 'LV'],
'MIA': ['NE', 'BUF', 'LV', 'IND', 'TB', 'JAX', 'ATL', 'BUF', 'HOU', 'BAL', 'NYJ', 'CAR', 'NYG', 'NYJ', 'NO', 'TEN', 'NE'],
'MIN': ['CIN', 'ARI', 'SEA', 'CLE', 'DET', 'CAR', 'DAL', 'BAL', 'LAC', 'GB', 'SF', 'DET', 'PIT', 'CHI', 'LA', 'GB', 'CHI'],
'NE': ['MIA', 'NYJ', 'NO', 'TB', 'HOU', 'DAL', 'NYJ', 'LAC', 'CAR', 'CLE', 'ATL', 'TEN', 'BUF', 'IND', 'BUF', 'JAX', 'MIA'],
'NO': ['GB', 'CAR', 'NE', 'NYG', 'WAS', 'SEA', 'TB', 'ATL', 'TEN', 'PHI', 'BUF', 'DAL', 'NYJ', 'TB', 'MIA', 'CAR', 'ATL'],
'NYG': ['DEN', 'WAS', 'ATL', 'NO', 'DAL', 'LA', 'CAR', 'KC', 'LV', 'TB', 'PHI', 'MIA', 'LAC', 'DAL', 'PHI', 'CHI', 'WAS'],
'NYJ': ['CAR', 'NE', 'DEN', 'TEN', 'ATL', 'NE', 'CIN', 'IND', 'BUF', 'MIA', 'HOU', 'PHI', 'NO', 'MIA', 'JAX', 'TB', 'BUF'],
'PHI': ['ATL', 'SF', 'DAL', 'KC', 'CAR', 'TB', 'LV', 'DET', 'LAC', 'DEN', 'NO', 'NYG', 'NYJ', 'WAS', 'NYG', 'WAS', 'DAL'],
'PIT': ['BUF', 'LV', 'CIN', 'GB', 'DEN', 'SEA', 'CLE', 'CHI', 'DET', 'LAC', 'CIN', 'BAL', 'MIN', 'TEN', 'KC', 'CLE', 'BAL'],
'SF': ['DET', 'PHI', 'GB', 'SEA', 'ARI', 'IND', 'CHI', 'ARI', 'LA', 'JAX', 'MIN', 'SEA', 'CIN', 'ATL', 'TEN', 'HOU', 'LA'],
'SEA': ['IND', 'TEN', 'MIN', 'SF', 'LA', 'PIT', 'NO', 'JAX', 'GB', 'ARI', 'WAS', 'SF', 'HOU', 'LA', 'CHI', 'DET', 'ARI'],
'TB': ['DAL', 'ATL', 'LA', 'NE', 'MIA', 'PHI', 'CHI', 'NO', 'WAS', 'NYG', 'IND', 'ATL', 'BUF', 'NO', 'CAR', 'NYJ', 'CAR'],
'TEN': ['ARI', 'SEA', 'IND', 'NYJ', 'JAX', 'BUF', 'KC', 'IND', 'LA', 'NO', 'HOU', 'NE', 'JAX', 'PIT', 'SF', 'MIA', 'HOU'],
'WAS': ['LAC', 'NYG', 'BUF', 'ATL', 'NO', 'KC', 'GB', 'DEN', 'TB', 'CAR', 'SEA', 'LV', 'DAL', 'PHI', 'DAL', 'PHI', 'NYG']
};

let team_to_abbr = {
'Arizona Cardinals': 'ARI',
'Atlanta Falcons': 'ATL',
'Baltimore Ravens': 'BAL',
'Buffalo Bills': 'BUF',
'Carolina Panthers': 'CAR',
'Chicago Bears': 'CHI',
'Cincinnati Bengals': 'CIN',
'Cleveland Browns': 'CLE',
'Dallas Cowboys': 'DAL',
'Denver Broncos': 'DEN',
'Detroit Lions': 'DET',
'Green Bay Packers': 'GB',
'Houston Texans': 'HOU',
'Indianapolis Colts': 'IND',
'Jacksonville Jaguars': 'JAX',
'Kansas City Chiefs': 'KC',
'Las Vegas Raiders': 'LV',
'Los Angeles Rams': 'LA',
'Los Angeles Chargers': 'LAC',
'Miami Dolphins': 'MIA',
'Minnesota Vikings': 'MIN',
'New England Patriots': 'NE',
'New Orleans Saints': 'NO',
'New York Giants': 'NYG',
'New York Jets': 'NYJ',
'Philadelphia Eagles': 'PHI',
'Pittsburgh Steelers': 'PIT',
'San Francisco 49ers': 'SF',
'Seattle Seahawks': 'SEA',
'Tampa Bay Buccaneers': 'TB',
'Tennessee Titans': 'TEN',
'Washington Football Team': 'WAS'
};

let json_run = '{"TB": [0.0, 0.0, 0.007518796992481203, 0.015037593984962405, 0.03759398496240601, 0.11278195488721804, 0.2556390977443609, 0.39097744360902253, 0.5037593984962405, 0.6015037593984962, 0.7142857142857142, 0.7518796992481203, 0.8120300751879699, 0.8421052631578947, 0.8796992481203008, 0.887218045112782, 0.9022556390977444, 0.9248120300751881, 0.9323308270676693, 0.9548872180451129, 0.9624060150375942, 1.0000000000000002], "KC": [0.02072538860103627, 0.02072538860103627, 0.04145077720207254, 0.046632124352331605, 0.06217616580310881, 0.10880829015544041, 0.18134715025906734, 0.24352331606217614, 0.40932642487046633, 0.5077720207253886, 0.6010362694300518, 0.6787564766839378, 0.7512953367875648, 0.7772020725388601, 0.8290155440414507, 0.8911917098445595, 0.9067357512953367, 0.9378238341968911, 0.9533678756476682, 0.9585492227979273, 0.9689119170984455, 1.0207253886010361], "GB": [0.017142857142857144, 0.017142857142857144, 0.017142857142857144, 0.022857142857142857, 0.03428571428571429, 0.06285714285714286, 0.12571428571428572, 0.25142857142857145, 0.4285714285714286, 0.5428571428571429, 0.6400000000000001, 0.7200000000000001, 0.7942857142857144, 0.8285714285714286, 0.8742857142857143, 0.9142857142857144, 0.9371428571428573, 0.9657142857142859, 0.9714285714285715, 0.982857142857143, 0.9885714285714287, 1.0171428571428571], "BAL": [0.013888888888888888, 0.034722222222222224, 0.04861111111111111, 0.0625, 0.10416666666666666, 0.18055555555555555, 0.3125, 0.4166666666666667, 0.5486111111111112, 0.6458333333333334, 0.7291666666666667, 0.7430555555555556, 0.7708333333333334, 0.8055555555555556, 0.8402777777777778, 0.875, 0.8888888888888888, 0.9027777777777777, 0.9166666666666665, 0.9374999999999999, 0.9583333333333333, 1.0138888888888888], "CLE": [0.005649717514124294, 0.005649717514124294, 0.005649717514124294, 0.022598870056497175, 0.07344632768361582, 0.096045197740113, 0.1638418079096045, 0.2994350282485876, 0.4632768361581921, 0.5932203389830508, 0.7175141242937852, 0.7966101694915254, 0.8418079096045198, 0.8757062146892656, 0.9152542372881356, 0.943502824858757, 0.9491525423728813, 0.9604519774011299, 0.9604519774011299, 0.9661016949152541, 0.9717514124293783, 1.0056497175141241], "BUF": [0.0, 0.007936507936507936, 0.023809523809523808, 0.03968253968253968, 0.07142857142857142, 0.15873015873015872, 0.2222222222222222, 0.3412698412698413, 0.5158730158730158, 0.611111111111111, 0.6984126984126984, 0.7698412698412698, 0.8095238095238094, 0.865079365079365, 0.8809523809523809, 0.9047619047619048, 0.9126984126984127, 0.9206349206349206, 0.9444444444444444, 0.9523809523809523, 0.9523809523809523, 1.0], "DAL": [0.007692307692307693, 0.007692307692307693, 0.015384615384615385, 0.015384615384615385, 0.06153846153846154, 0.1076923076923077, 0.18461538461538463, 0.3153846153846154, 0.4076923076923077, 0.5461538461538462, 0.6692307692307693, 0.7384615384615385, 0.8, 0.8615384615384616, 0.8923076923076924, 0.9153846153846155, 0.9153846153846155, 0.9307692307692308, 0.9384615384615385, 0.9384615384615385, 0.9538461538461538, 1.0076923076923077], "ARI": [0.005319148936170213, 0.005319148936170213, 0.005319148936170213, 0.02127659574468085, 0.06914893617021277, 0.10638297872340426, 0.2074468085106383, 0.2925531914893617, 0.4095744680851064, 0.48404255319148937, 0.6117021276595744, 0.6436170212765957, 0.7074468085106382, 0.7659574468085106, 0.8191489361702128, 0.8670212765957447, 0.8829787234042553, 0.9095744680851063, 0.925531914893617, 0.9414893617021276, 0.952127659574468, 1.0053191489361701], "TEN": [0.0, 0.006097560975609756, 0.006097560975609756, 0.03048780487804878, 0.04878048780487805, 0.07926829268292683, 0.14634146341463417, 0.25609756097560976, 0.4207317073170732, 0.4634146341463415, 0.5548780487804879, 0.6829268292682927, 0.7621951219512195, 0.8048780487804879, 0.8475609756097562, 0.8902439024390245, 0.9146341463414636, 0.9329268292682928, 0.9451219512195124, 0.9512195121951221, 0.9573170731707319, 1.0000000000000002], "LAC": [0.014778325123152709, 0.019704433497536946, 0.019704433497536946, 0.029556650246305417, 0.04433497536945813, 0.08866995073891626, 0.1330049261083744, 0.22167487684729065, 0.32019704433497537, 0.43842364532019706, 0.5320197044334976, 0.6502463054187192, 0.7684729064039408, 0.8275862068965517, 0.8768472906403941, 0.8916256157635468, 0.9113300492610837, 0.9211822660098522, 0.9359605911330049, 0.9458128078817734, 0.960591133004926, 1.0147783251231526], "LA": [0.005747126436781609, 0.005747126436781609, 0.011494252873563218, 0.028735632183908046, 0.040229885057471264, 0.07471264367816091, 0.1896551724137931, 0.3333333333333333, 0.4482758620689655, 0.5919540229885057, 0.7298850574712643, 0.8045977011494252, 0.850574712643678, 0.8620689655172412, 0.8850574712643676, 0.9022988505747125, 0.9195402298850573, 0.9367816091954022, 0.9425287356321839, 0.9540229885057471, 0.9885057471264367, 1.0057471264367814], "NO": [0.0, 0.013245033112582781, 0.013245033112582781, 0.026490066225165563, 0.052980132450331126, 0.12582781456953643, 0.2317880794701987, 0.3973509933774835, 0.5298013245033113, 0.6622516556291391, 0.7152317880794703, 0.7880794701986756, 0.8675496688741723, 0.880794701986755, 0.9139072847682119, 0.9337748344370861, 0.9337748344370861, 0.9470198675496688, 0.9536423841059603, 0.9602649006622517, 0.9668874172185431, 1.0], "SF": [0.011494252873563218, 0.011494252873563218, 0.040229885057471264, 0.05172413793103448, 0.09770114942528735, 0.13793103448275862, 0.21264367816091956, 0.3160919540229885, 0.4425287356321839, 0.5632183908045977, 0.6551724137931034, 0.7241379310344828, 0.8160919540229885, 0.8448275862068966, 0.8735632183908046, 0.9137931034482759, 0.942528735632184, 0.9482758620689656, 0.9597701149425288, 0.9597701149425288, 0.971264367816092, 1.0114942528735633], "NE": [0.005263157894736842, 0.005263157894736842, 0.005263157894736842, 0.02631578947368421, 0.042105263157894736, 0.07894736842105263, 0.15789473684210525, 0.27368421052631575, 0.39999999999999997, 0.5789473684210527, 0.668421052631579, 0.7578947368421054, 0.805263157894737, 0.8473684210526318, 0.9000000000000001, 0.9210526315789475, 0.9210526315789475, 0.9421052631578948, 0.9473684210526316, 0.9578947368421054, 0.9631578947368422, 1.0052631578947369], "DEN": [0.0, 0.005291005291005291, 0.005291005291005291, 0.010582010582010581, 0.031746031746031744, 0.06349206349206349, 0.1111111111111111, 0.21164021164021163, 0.3439153439153439, 0.4973544973544973, 0.6296296296296295, 0.7513227513227512, 0.8253968253968252, 0.857142857142857, 0.8835978835978835, 0.9153439153439152, 0.9259259259259258, 0.9365079365079364, 0.9576719576719576, 0.9735449735449735, 0.9735449735449735, 1.0], "SEA": [0.0, 0.0, 0.0, 0.01762114537444934, 0.048458149779735685, 0.0881057268722467, 0.14977973568281938, 0.29074889867841414, 0.4273127753303965, 0.5594713656387665, 0.7048458149779736, 0.7665198237885463, 0.8105726872246697, 0.8590308370044054, 0.8898678414096918, 0.9207048458149781, 0.9339207048458151, 0.9427312775330398, 0.9647577092511014, 0.9691629955947137, 0.9735682819383261, 1.0000000000000002], "WAS": [0.016216216216216217, 0.02702702702702703, 0.02702702702702703, 0.05945945945945946, 0.08108108108108109, 0.11351351351351352, 0.2, 0.31351351351351353, 0.5135135135135136, 0.6540540540540541, 0.7027027027027029, 0.783783783783784, 0.8324324324324326, 0.8864864864864866, 0.9189189189189191, 0.9405405405405407, 0.945945945945946, 0.9675675675675677, 0.9675675675675677, 0.983783783783784, 0.9945945945945948, 1.0162162162162165], "LV": [0.0056179775280898875, 0.0056179775280898875, 0.0056179775280898875, 0.02247191011235955, 0.03932584269662921, 0.06741573033707865, 0.20224719101123595, 0.34269662921348315, 0.4213483146067416, 0.5337078651685394, 0.6404494382022473, 0.7134831460674158, 0.7865168539325843, 0.8258426966292135, 0.8651685393258427, 0.8932584269662921, 0.898876404494382, 0.9269662921348314, 0.9269662921348314, 0.9269662921348314, 0.949438202247191, 1.0056179775280898], "IND": [0.02512562814070352, 0.030150753768844223, 0.035175879396984924, 0.06532663316582915, 0.07537688442211056, 0.1256281407035176, 0.21105527638190957, 0.32663316582914576, 0.5025125628140704, 0.5929648241206031, 0.7236180904522614, 0.8090452261306534, 0.8793969849246233, 0.8793969849246233, 0.8944723618090453, 0.9296482412060303, 0.9447236180904524, 0.9547738693467338, 0.9648241206030153, 0.9899497487437188, 1.0000000000000002, 1.0251256281407037], "PIT": [0.012195121951219513, 0.01829268292682927, 0.042682926829268296, 0.05487804878048781, 0.09146341463414634, 0.1524390243902439, 0.1951219512195122, 0.3231707317073171, 0.45121951219512196, 0.5731707317073171, 0.6463414634146342, 0.7195121951219512, 0.7865853658536586, 0.8353658536585367, 0.8597560975609757, 0.878048780487805, 0.8963414634146343, 0.9268292682926831, 0.9329268292682928, 0.9390243902439026, 0.9512195121951221, 1.0121951219512197], "CHI": [0.004975124378109453, 0.014925373134328358, 0.014925373134328358, 0.02487562189054726, 0.03980099502487562, 0.0845771144278607, 0.15422885572139305, 0.28358208955223885, 0.40796019900497515, 0.5373134328358209, 0.6119402985074627, 0.7164179104477612, 0.7711442786069651, 0.8059701492537312, 0.8457711442786069, 0.8756218905472636, 0.8855721393034824, 0.9104477611940297, 0.9402985074626864, 0.9452736318407958, 0.9502487562189053, 1.0049751243781093], "MIA": [0.014778325123152709, 0.02463054187192118, 0.029556650246305417, 0.034482758620689655, 0.04433497536945813, 0.09852216748768473, 0.18226600985221675, 0.3251231527093596, 0.458128078817734, 0.5467980295566502, 0.6847290640394088, 0.7487684729064039, 0.8078817733990148, 0.8472906403940886, 0.8719211822660098, 0.8817733990147782, 0.9064039408866994, 0.9162561576354679, 0.9310344827586206, 0.9507389162561575, 0.9605911330049259, 1.0147783251231526], "NYG": [0.0, 0.0, 0.004629629629629629, 0.013888888888888888, 0.027777777777777776, 0.05555555555555555, 0.13425925925925924, 0.19907407407407407, 0.37962962962962965, 0.5185185185185186, 0.6203703703703705, 0.7037037037037038, 0.7731481481481483, 0.8148148148148149, 0.8564814814814815, 0.888888888888889, 0.9166666666666667, 0.9305555555555556, 0.9490740740740741, 0.9583333333333334, 0.9722222222222222, 1.0], "MIN": [0.0, 0.0, 0.0, 0.005847953216374269, 0.017543859649122806, 0.03508771929824561, 0.09941520467836257, 0.19883040935672514, 0.40350877192982454, 0.5263157894736842, 0.631578947368421, 0.7251461988304093, 0.8011695906432748, 0.830409356725146, 0.8771929824561402, 0.9181286549707601, 0.9239766081871343, 0.9356725146198829, 0.9532163742690056, 0.9766081871345027, 0.9824561403508769, 0.9999999999999998], "ATL": [0.00558659217877095, 0.01675977653631285, 0.01675977653631285, 0.03910614525139665, 0.06145251396648045, 0.1005586592178771, 0.1340782122905028, 0.21787709497206703, 0.3743016759776536, 0.5027932960893855, 0.5977653631284916, 0.6703910614525139, 0.8212290502793296, 0.8659217877094971, 0.9162011173184357, 0.9441340782122905, 0.9664804469273742, 0.9664804469273742, 0.9664804469273742, 0.9776536312849161, 0.9832402234636871, 1.005586592178771], "PHI": [0.0, 0.008888888888888889, 0.017777777777777778, 0.026666666666666665, 0.04, 0.08, 0.13333333333333333, 0.26666666666666666, 0.38222222222222224, 0.5155555555555555, 0.6177777777777778, 0.7155555555555555, 0.7555555555555555, 0.7911111111111111, 0.84, 0.8933333333333333, 0.9155555555555556, 0.9466666666666667, 0.96, 0.9644444444444444, 0.9688888888888889, 1.0], "HOU": [0.01327433628318584, 0.022123893805309734, 0.02654867256637168, 0.04424778761061947, 0.05752212389380531, 0.10176991150442477, 0.1902654867256637, 0.3008849557522124, 0.3672566371681416, 0.4690265486725664, 0.5752212389380531, 0.6415929203539823, 0.7079646017699115, 0.7654867256637168, 0.8053097345132743, 0.8451327433628317, 0.8672566371681415, 0.8761061946902654, 0.9070796460176991, 0.9247787610619469, 0.9424778761061947, 1.0132743362831858], "CIN": [0.005780346820809248, 0.017341040462427744, 0.023121387283236993, 0.040462427745664734, 0.05202312138728323, 0.10982658959537572, 0.21965317919075145, 0.3930635838150289, 0.5260115606936416, 0.6011560693641619, 0.6763005780346821, 0.7456647398843931, 0.8092485549132948, 0.8497109826589596, 0.8901734104046244, 0.9017341040462429, 0.9190751445086707, 0.9421965317919077, 0.9537572254335261, 0.9595375722543354, 0.9653179190751447, 1.0057803468208095], "JAX": [0.005319148936170213, 0.015957446808510637, 0.02127659574468085, 0.026595744680851064, 0.0425531914893617, 0.06914893617021277, 0.18617021276595747, 0.30851063829787234, 0.425531914893617, 0.5585106382978724, 0.6914893617021277, 0.7872340425531915, 0.8351063829787234, 0.8723404255319149, 0.898936170212766, 0.9468085106382979, 0.9521276595744681, 0.973404255319149, 0.9787234042553192, 0.9840425531914895, 0.9893617021276597, 1.0053191489361704], "DET": [0.004545454545454545, 0.00909090909090909, 0.013636363636363636, 0.01818181818181818, 0.049999999999999996, 0.08181818181818182, 0.1590909090909091, 0.2772727272727273, 0.37272727272727274, 0.5272727272727273, 0.6636363636363637, 0.7318181818181819, 0.7863636363636365, 0.8227272727272729, 0.8727272727272729, 0.9136363636363638, 0.9454545454545457, 0.9681818181818184, 0.9727272727272729, 0.9727272727272729, 0.9772727272727274, 1.0045454545454546], "CAR": [0.00558659217877095, 0.0111731843575419, 0.0111731843575419, 0.0335195530726257, 0.061452513966480445, 0.10614525139664804, 0.18994413407821228, 0.34636871508379885, 0.4860335195530726, 0.5642458100558659, 0.6536312849162011, 0.7262569832402235, 0.782122905027933, 0.8212290502793297, 0.8435754189944135, 0.8770949720670391, 0.8826815642458101, 0.893854748603352, 0.9050279329608939, 0.9106145251396649, 0.9497206703910616, 1.005586592178771], "NYJ": [0.0106951871657754, 0.0213903743315508, 0.0320855614973262, 0.0374331550802139, 0.0748663101604278, 0.1336898395721925, 0.213903743315508, 0.3368983957219251, 0.47058823529411764, 0.5668449197860963, 0.6470588235294118, 0.7005347593582888, 0.7433155080213903, 0.7967914438502673, 0.8288770053475936, 0.8770053475935828, 0.9037433155080213, 0.9144385026737968, 0.9304812834224598, 0.9411764705882353, 0.9572192513368983, 1.0106951871657754]}';

let json_pass = '{"TB": [0.031791907514450865, 0.040462427745664734, 0.040462427745664734, 0.043352601156069356, 0.043352601156069356, 0.04624277456647398, 0.38439306358381503, 0.4046242774566474, 0.43352601156069365, 0.47109826589595377, 0.5289017341040463, 0.5982658959537572, 0.6589595375722543, 0.708092485549133, 0.7398843930635838, 0.7658959537572254, 0.7976878612716762, 0.8208092485549132, 0.852601156069364, 0.8583815028901733, 0.8786127167630057, 1.0317919075144508], "KC": [0.028469750889679714, 0.028469750889679714, 0.03914590747330961, 0.03914590747330961, 0.0498220640569395, 0.0498220640569395, 0.37010676156583633, 0.3914590747330961, 0.402135231316726, 0.44839857651245557, 0.4946619217081851, 0.5338078291814947, 0.5836298932384342, 0.6156583629893239, 0.6583629893238434, 0.701067615658363, 0.7295373665480427, 0.7615658362989324, 0.7935943060498221, 0.8078291814946619, 0.8256227758007118, 1.0284697508896796], "GB": [0.03546099290780142, 0.03546099290780142, 0.03546099290780142, 0.03546099290780142, 0.03546099290780142, 0.03900709219858156, 0.3900709219858156, 0.40070921985815605, 0.4326241134751773, 0.4787234042553192, 0.5212765957446809, 0.5815602836879433, 0.6276595744680852, 0.6773049645390071, 0.7340425531914894, 0.7836879432624113, 0.8191489361702128, 0.851063829787234, 0.8865248226950355, 0.8936170212765958, 0.9042553191489362, 1.0354609929078014], "BAL": [0.017985611510791366, 0.021582733812949638, 0.021582733812949638, 0.028776978417266185, 0.03237410071942446, 0.03956834532374101, 0.4064748201438849, 0.4172661870503597, 0.4352517985611511, 0.4676258992805756, 0.5035971223021583, 0.5503597122302158, 0.5863309352517986, 0.6187050359712231, 0.6438848920863309, 0.6870503597122302, 0.712230215827338, 0.7697841726618704, 0.7841726618705035, 0.8093525179856114, 0.8273381294964027, 1.0179856115107913], "CLE": [0.017421602787456445, 0.020905923344947733, 0.020905923344947733, 0.027874564459930314, 0.0313588850174216, 0.041811846689895474, 0.470383275261324, 0.48432055749128916, 0.5017421602787456, 0.5261324041811847, 0.554006968641115, 0.5749128919860628, 0.6236933797909409, 0.6515679442508712, 0.6933797909407666, 0.7386759581881533, 0.7630662020905924, 0.8013937282229966, 0.8292682926829269, 0.853658536585366, 0.878048780487805, 1.0174216027874565], "BUF": [0.04868913857677903, 0.04868913857677903, 0.04868913857677903, 0.04868913857677903, 0.0599250936329588, 0.06367041198501873, 0.47191011235955055, 0.4831460674157303, 0.49063670411985016, 0.5131086142322097, 0.5617977528089887, 0.6142322097378277, 0.6629213483146067, 0.696629213483146, 0.7752808988764044, 0.797752808988764, 0.8164794007490637, 0.8576779026217228, 0.8876404494382022, 0.898876404494382, 0.9325842696629213, 1.048689138576779], "DAL": [0.04195804195804196, 0.04195804195804196, 0.04895104895104895, 0.05244755244755245, 0.06993006993006994, 0.07342657342657344, 0.4090909090909091, 0.4195804195804196, 0.44405594405594406, 0.4825174825174825, 0.5034965034965034, 0.5664335664335663, 0.5979020979020978, 0.6503496503496502, 0.6853146853146852, 0.7272727272727272, 0.7482517482517481, 0.7762237762237761, 0.7902097902097901, 0.8181818181818181, 0.8426573426573426, 1.0419580419580419], "ARI": [0.02456140350877193, 0.02456140350877193, 0.02456140350877193, 0.031578947368421054, 0.03508771929824561, 0.03859649122807017, 0.41754385964912283, 0.4280701754385965, 0.4456140350877193, 0.4666666666666667, 0.5087719298245614, 0.5684210526315789, 0.631578947368421, 0.6842105263157894, 0.719298245614035, 0.7649122807017543, 0.8035087719298245, 0.8175438596491228, 0.856140350877193, 0.8912280701754386, 0.9157894736842105, 1.024561403508772], "TEN": [0.026627218934911243, 0.026627218934911243, 0.02958579881656805, 0.02958579881656805, 0.038461538461538464, 0.038461538461538464, 0.4171597633136095, 0.4378698224852071, 0.45857988165680474, 0.5088757396449705, 0.5532544378698225, 0.591715976331361, 0.636094674556213, 0.6923076923076923, 0.742603550295858, 0.7869822485207101, 0.8106508875739645, 0.8402366863905326, 0.8727810650887575, 0.8846153846153847, 0.8964497041420119, 1.0266272189349113], "LAC": [0.026200873362445413, 0.026200873362445413, 0.03056768558951965, 0.03056768558951965, 0.034934497816593885, 0.043668122270742356, 0.40611353711790393, 0.42358078602620086, 0.4585152838427947, 0.47598253275109165, 0.5152838427947598, 0.5720524017467249, 0.6200873362445415, 0.6855895196506551, 0.7248908296943232, 0.7554585152838428, 0.7903930131004366, 0.8253275109170305, 0.8515283842794759, 0.8733624454148471, 0.8820960698689956, 1.0262008733624453], "LA": [0.03614457831325301, 0.0391566265060241, 0.042168674698795185, 0.04518072289156627, 0.05120481927710844, 0.06024096385542169, 0.38253012048192775, 0.4036144578313253, 0.42168674698795183, 0.463855421686747, 0.48493975903614456, 0.536144578313253, 0.5753012048192772, 0.6295180722891567, 0.6867469879518073, 0.743975903614458, 0.7921686746987954, 0.8192771084337351, 0.8313253012048195, 0.849397590361446, 0.8765060240963858, 1.0361445783132532], "NO": [0.03859649122807018, 0.052631578947368425, 0.05964912280701755, 0.05964912280701755, 0.05964912280701755, 0.06666666666666667, 0.4350877192982456, 0.4491228070175438, 0.46315789473684205, 0.4842105263157894, 0.5298245614035088, 0.5649122807017544, 0.6070175438596491, 0.6736842105263158, 0.7333333333333333, 0.7684210526315789, 0.7964912280701754, 0.8140350877192981, 0.8245614035087718, 0.8421052631578947, 0.8526315789473684, 1.03859649122807], "SF": [0.008298755186721992, 0.016597510373443983, 0.02074688796680498, 0.02074688796680498, 0.03319502074688797, 0.049792531120331954, 0.4107883817427386, 0.43153526970954353, 0.48547717842323646, 0.5186721991701244, 0.5352697095435685, 0.5850622406639004, 0.6514522821576764, 0.6804979253112033, 0.7012448132780084, 0.7468879668049793, 0.7759336099585062, 0.8091286307053942, 0.8298755186721992, 0.8547717842323652, 0.8796680497925312, 1.008298755186722], "NE": [0.033444816053511704, 0.03678929765886287, 0.03678929765886287, 0.03678929765886287, 0.043478260869565216, 0.043478260869565216, 0.4280936454849499, 0.4481605351170569, 0.4548494983277592, 0.4916387959866221, 0.5183946488294314, 0.5451505016722408, 0.5953177257525083, 0.6421404682274247, 0.6789297658862875, 0.7056856187290969, 0.7157190635451504, 0.7625418060200667, 0.8026755852842807, 0.8428093645484948, 0.8695652173913041, 1.0334448160535115], "DEN": [0.02158273381294964, 0.03237410071942446, 0.03237410071942446, 0.03237410071942446, 0.04316546762589928, 0.04316546762589928, 0.4568345323741007, 0.4784172661870503, 0.4856115107913669, 0.5035971223021583, 0.5539568345323741, 0.5827338129496403, 0.6366906474820144, 0.6726618705035972, 0.723021582733813, 0.7374100719424461, 0.7446043165467626, 0.7517985611510791, 0.7661870503597122, 0.7949640287769785, 0.8309352517985612, 1.0215827338129497], "SEA": [0.008928571428571428, 0.011904761904761904, 0.01488095238095238, 0.017857142857142856, 0.017857142857142856, 0.023809523809523808, 0.37797619047619047, 0.3898809523809524, 0.4017857142857143, 0.4166666666666667, 0.44642857142857145, 0.4910714285714286, 0.5446428571428572, 0.6190476190476191, 0.6607142857142857, 0.7202380952380952, 0.7559523809523809, 0.7797619047619048, 0.8154761904761905, 0.8392857142857143, 0.8660714285714286, 1.0089285714285714], "WAS": [0.012422360248447204, 0.012422360248447204, 0.018633540372670808, 0.021739130434782608, 0.024844720496894408, 0.024844720496894408, 0.3664596273291925, 0.3819875776397515, 0.4037267080745341, 0.4285714285714285, 0.4658385093167701, 0.5093167701863354, 0.5527950310559006, 0.6024844720496894, 0.624223602484472, 0.6552795031055899, 0.6863354037267079, 0.7360248447204967, 0.7701863354037265, 0.8012422360248445, 0.8198757763975153, 1.012422360248447], "LV": [0.01845018450184502, 0.02214022140221402, 0.02214022140221402, 0.025830258302583023, 0.025830258302583023, 0.029520295202952025, 0.39114391143911437, 0.4022140221402214, 0.4354243542435424, 0.4575645756457564, 0.5166051660516605, 0.5682656826568265, 0.6273062730627306, 0.6826568265682657, 0.7195571955719557, 0.7675276752767528, 0.8007380073800738, 0.8154981549815499, 0.8413284132841329, 0.8745387453874539, 0.896678966789668, 1.018450184501845], "IND": [0.03345724907063197, 0.04089219330855018, 0.044609665427509285, 0.044609665427509285, 0.04832713754646839, 0.04832713754646839, 0.31970260223048325, 0.33085501858736055, 0.345724907063197, 0.39405204460966536, 0.4460966542750929, 0.49070631970260215, 0.5390334572490706, 0.5947955390334572, 0.6468401486988846, 0.691449814126394, 0.7360594795539033, 0.7769516728624535, 0.79182156133829, 0.828996282527881, 0.8661710037174721, 1.033457249070632], "PIT": [0.007936507936507936, 0.007936507936507936, 0.011904761904761904, 0.015873015873015872, 0.01984126984126984, 0.027777777777777776, 0.376984126984127, 0.3849206349206349, 0.4047619047619047, 0.42460317460317454, 0.45238095238095233, 0.488095238095238, 0.5317460317460316, 0.5952380952380951, 0.6230158730158729, 0.6825396825396824, 0.73015873015873, 0.7579365079365078, 0.8055555555555554, 0.8293650793650792, 0.8611111111111109, 1.0079365079365077], "CHI": [0.015267175572519083, 0.015267175572519083, 0.022900763358778626, 0.022900763358778626, 0.022900763358778626, 0.022900763358778626, 0.41221374045801523, 0.42748091603053434, 0.45038167938931295, 0.4847328244274809, 0.5229007633587786, 0.5419847328244274, 0.5916030534351144, 0.6335877862595419, 0.6526717557251908, 0.7061068702290075, 0.7251908396946564, 0.748091603053435, 0.7748091603053434, 0.8015267175572518, 0.8206106870229006, 1.0152671755725189], "MIA": [0.009146341463414634, 0.009146341463414634, 0.009146341463414634, 0.012195121951219513, 0.01524390243902439, 0.018292682926829267, 0.35975609756097565, 0.39634146341463417, 0.4054878048780488, 0.4451219512195122, 0.4878048780487805, 0.5091463414634146, 0.5640243902439025, 0.6158536585365855, 0.6554878048780489, 0.6829268292682928, 0.7195121951219514, 0.7682926829268295, 0.7987804878048783, 0.8140243902439027, 0.8292682926829271, 1.009146341463415], "NYG": [0.026058631921824105, 0.02931596091205212, 0.035830618892508145, 0.03908794788273616, 0.042345276872964174, 0.04560260586319219, 0.3713355048859935, 0.3941368078175896, 0.4169381107491857, 0.45276872964169385, 0.50814332247557, 0.5504885993485342, 0.6123778501628665, 0.6644951140065147, 0.6938110749185669, 0.7394136807817591, 0.7687296416938112, 0.7947882736156353, 0.8241042345276874, 0.8403908794788275, 0.8566775244299676, 1.0260586319218243], "MIN": [0.022988505747126436, 0.022988505747126436, 0.022988505747126436, 0.03065134099616858, 0.03065134099616858, 0.03065134099616858, 0.4329501915708812, 0.4444444444444444, 0.47126436781609193, 0.49808429118773945, 0.5440613026819923, 0.5862068965517241, 0.6130268199233716, 0.6513409961685823, 0.689655172413793, 0.7241379310344827, 0.7432950191570881, 0.7586206896551724, 0.7777777777777778, 0.7969348659003832, 0.8160919540229886, 1.0229885057471266], "ATL": [0.012145748987854251, 0.020242914979757085, 0.020242914979757085, 0.024291497975708502, 0.032388663967611336, 0.04453441295546559, 0.368421052631579, 0.3967611336032389, 0.417004048582996, 0.4372469635627531, 0.4777327935222673, 0.51417004048583, 0.5465587044534413, 0.5789473684210527, 0.6153846153846154, 0.6761133603238867, 0.7246963562753037, 0.7692307692307693, 0.785425101214575, 0.805668016194332, 0.8218623481781377, 1.0121457489878543], "PHI": [0.024475524475524476, 0.024475524475524476, 0.03146853146853147, 0.03146853146853147, 0.03146853146853147, 0.04895104895104896, 0.3076923076923077, 0.3251748251748252, 0.3706293706293707, 0.39160839160839167, 0.4300699300699301, 0.5, 0.5629370629370629, 0.6328671328671328, 0.6993006993006993, 0.7587412587412588, 0.8041958041958042, 0.8426573426573426, 0.8671328671328671, 0.8776223776223776, 0.8881118881118881, 1.0244755244755246], "HOU": [0.027131782945736434, 0.027131782945736434, 0.027131782945736434, 0.03488372093023256, 0.03488372093023256, 0.03875968992248062, 0.36434108527131787, 0.39922480620155043, 0.4147286821705427, 0.44186046511627913, 0.4651162790697675, 0.5232558139534884, 0.554263565891473, 0.5930232558139535, 0.6356589147286822, 0.6782945736434108, 0.7093023255813953, 0.7403100775193798, 0.7558139534883721, 0.7984496124031008, 0.810077519379845, 1.0271317829457365], "CIN": [0.020289855072463767, 0.02318840579710145, 0.026086956521739132, 0.026086956521739132, 0.0318840579710145, 0.04927536231884058, 0.3826086956521739, 0.3855072463768116, 0.4028985507246377, 0.4521739130434783, 0.48115942028985514, 0.5391304347826088, 0.5884057971014494, 0.6405797101449276, 0.6898550724637682, 0.7217391304347827, 0.7565217391304349, 0.7884057971014493, 0.8202898550724638, 0.8434782608695652, 0.8579710144927536, 1.0202898550724637], "JAX": [0.012552301255230125, 0.012552301255230125, 0.012552301255230125, 0.012552301255230125, 0.02092050209205021, 0.02510460251046025, 0.3096234309623431, 0.33054393305439334, 0.34309623430962344, 0.36401673640167365, 0.39748953974895396, 0.4476987447698745, 0.497907949790795, 0.5690376569037657, 0.6276150627615064, 0.6694560669456068, 0.7112970711297072, 0.7280334728033474, 0.7656903765690378, 0.7782426778242679, 0.8033472803347281, 1.0125523012552302], "DET": [0.017391304347826087, 0.021739130434782608, 0.021739130434782608, 0.021739130434782608, 0.021739130434782608, 0.021739130434782608, 0.34782608695652173, 0.3695652173913043, 0.39999999999999997, 0.4260869565217391, 0.4608695652173913, 0.5173913043478261, 0.5565217391304348, 0.6043478260869566, 0.6347826086956523, 0.673913043478261, 0.682608695652174, 0.7217391304347827, 0.7260869565217392, 0.7391304347826088, 0.7782608695652175, 1.0173913043478262], "CAR": [0.021897810218978103, 0.032846715328467155, 0.03649635036496351, 0.04744525547445256, 0.05109489051094891, 0.054744525547445265, 0.4306569343065693, 0.45255474452554745, 0.4927007299270073, 0.5182481751824818, 0.5401459854014599, 0.572992700729927, 0.6058394160583942, 0.6678832116788321, 0.7226277372262774, 0.7445255474452555, 0.7810218978102189, 0.8065693430656934, 0.8284671532846715, 0.8430656934306568, 0.8613138686131386, 1.021897810218978], "NYJ": [0.0036101083032490976, 0.010830324909747294, 0.010830324909747294, 0.01444043321299639, 0.021660649819494587, 0.03249097472924188, 0.37545126353790614, 0.40072202166064985, 0.4223826714801444, 0.4620938628158845, 0.4981949458483755, 0.5451263537906137, 0.5848375451263538, 0.6209386281588447, 0.6462093862815884, 0.6931407942238267, 0.7256317689530686, 0.7545126353790613, 0.7761732851985559, 0.7906137184115523, 0.8086642599277978, 1.0036101083032491]}';

let team_prob_run = JSON.parse(json_run);
let team_prob_pass = JSON.parse(json_pass);